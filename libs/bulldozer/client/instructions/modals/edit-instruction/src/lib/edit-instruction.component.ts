import { Component, HostBinding, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Document, Instruction } from '@heavy-duty/bulldozer-devkit';

@Component({
  selector: 'bd-edit-instruction',
  template: `
    <h2 mat-dialog-title class="mat-primary">
      {{ data?.instruction ? 'Edit' : 'Create' }} instruction
    </h2>

    <form
      [formGroup]="instructionGroup"
      class="flex flex-col gap-4"
      (ngSubmit)="onEditInstruction()"
    >
      <mat-form-field
        class="w-full"
        appearance="fill"
        hintLabel="Enter the name."
      >
        <mat-label>Name</mat-label>
        <input
          matInput
          formControlName="name"
          required
          autocomplete="off"
          maxlength="32"
        />
        <mat-hint align="end">{{ nameControl.value?.length || 0 }}/32</mat-hint>

        <mat-error *ngIf="submitted && nameControl.hasError('required')"
          >The name is mandatory.</mat-error
        >
        <mat-error *ngIf="submitted && nameControl.hasError('maxlength')"
          >Maximum length is 32.</mat-error
        >
      </mat-form-field>

      <button
        mat-stroked-button
        color="primary"
        class="w-full"
        [disabled]="submitted && instructionGroup.invalid"
      >
        {{ data?.instruction ? 'Save' : 'Create' }}
      </button>
    </form>

    <button
      mat-icon-button
      aria-label="Close edit instruction form"
      class="w-8 h-8 leading-none absolute top-0 right-0"
      mat-dialog-close
    >
      <mat-icon>close</mat-icon>
    </button>
  `,
})
export class EditInstructionComponent implements OnInit {
  @HostBinding('class') class = 'block w-72 relative';
  submitted = false;
  readonly instructionGroup = new FormGroup({
    name: new FormControl('', { validators: [Validators.required] }),
  });

  get nameControl() {
    return this.instructionGroup.get('name') as FormControl;
  }

  constructor(
    private readonly _matSnackBar: MatSnackBar,
    private readonly _matDialogRef: MatDialogRef<EditInstructionComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data?: {
      instruction?: Document<Instruction>;
    }
  ) {}

  ngOnInit() {
    if (this.data?.instruction) {
      this.instructionGroup.setValue(
        {
          name: this.data.instruction.name,
        },
        { emitEvent: false }
      );
    }
  }

  async onEditInstruction() {
    this.submitted = true;
    this.instructionGroup.markAllAsTouched();

    if (this.instructionGroup.valid) {
      this._matDialogRef.close({ name: this.nameControl.value });
    } else {
      this._matSnackBar.open('Invalid information', 'close', {
        panelClass: 'warning-snackbar',
        duration: 5000,
      });
    }
  }
}