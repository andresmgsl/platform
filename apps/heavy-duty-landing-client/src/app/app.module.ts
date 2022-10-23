import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
	declarations: [AppComponent, NxWelcomeComponent],
	imports: [
		BrowserModule,
		RouterModule.forRoot(
			[
				{
					path: '',
					loadChildren: () =>
						import('@heavy-duty-landing/shell').then((m) => m.ShellModule),
				},
			],
			{
				initialNavigation: 'enabledNonBlocking',
				paramsInheritanceStrategy: 'always',
			}
		),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
