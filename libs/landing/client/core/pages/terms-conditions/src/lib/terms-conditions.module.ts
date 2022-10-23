import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TermsAndConditionsComponent } from './terms-conditions.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild([
			{ path: '', pathMatch: 'full', component: TermsAndConditionsComponent },
		]),
	],
	declarations: [TermsAndConditionsComponent],
})
export class LandingTermsConditionsModule {}
