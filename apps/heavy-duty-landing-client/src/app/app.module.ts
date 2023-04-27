import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
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
				scrollPositionRestoration: 'enabled',
				scrollOffset: [0, 0],
			}
		),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
