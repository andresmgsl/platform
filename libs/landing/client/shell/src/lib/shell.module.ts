import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeavyDutyLandingFooterComponent } from '../../../shared/components/footer/footer.component';
import { HeavyDutyLandingNavbarComponent } from '../../../shared/components/navbar/navbar.component';
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
		HeavyDutyLandingFooterComponent,
		HeavyDutyLandingNavbarComponent,
	],
	declarations: [ShellComponent],
})
export class ShellModule {}
