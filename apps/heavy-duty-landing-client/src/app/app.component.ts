import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'heavy-duty-root',
	template: ` <router-outlet></router-outlet> `,
	styles: [],
})
export class AppComponent implements OnInit {
	title = 'heavy-duty-landing-client';

	ngOnInit() {
		console.log(this.title);
	}
}
