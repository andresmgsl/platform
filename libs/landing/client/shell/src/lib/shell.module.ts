import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingFooterModule } from '@heavy-duty-landing/footer';
import { LandingNavbarModule } from '@heavy-duty-landing/navbar';
import { ShellComponent } from './shell.component';

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
								(m) => m.LandingHomeModule
							),
					},
					{
						path: 'terms-conditions',
						loadChildren: () =>
							import('@heavy-duty-landing/core-pages-terms-conditions').then(
								(m) => m.LandingTermsConditionsModule
							),
					},
				],
			},
			{
				path: '**',
				redirectTo: 'workspaces',
			},
		]),
		LandingFooterModule,
		LandingNavbarModule,
	],
	declarations: [ShellComponent],
})
export class ShellModule {}
