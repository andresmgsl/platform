import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeavyDutyLandingFooterModule } from '@heavy-duty-landing/footer';
import { HeavyDutyLandingNavbarModule } from '@heavy-duty-landing/navbar';
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
		HeavyDutyLandingFooterModule,
		HeavyDutyLandingNavbarModule,
	],
	declarations: [ShellComponent],
})
export class ShellModule {}
