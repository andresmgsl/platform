import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: '',
				component: ShellComponent,
				children: [
					{
						path: '',
						loadChildren: () =>
							import('@heavy-duty-landing/core-pages-home').then(
								(m) => m.HomeModule
							),
					},
				],
			},
			{
				path: '**',
				redirectTo: 'workspaces',
			},
		]),
	],
	declarations: [ShellComponent],
})
export class ShellModule {}
