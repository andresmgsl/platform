import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'heavy-duty-shell',
	template: `
		<div
			id="main-content"
			class="bp-landing-font min-w-screen min-h-screen bg-[#121212] flex flex-col"
		>
			<heavy-duty-landing-navbar></heavy-duty-landing-navbar>

			<div>
				<router-outlet></router-outlet>
			</div>

			<heavy-duty-landing-footer></heavy-duty-landing-footer>
		</div>
	`,
	styles: [],
})
export class ShellComponent implements OnInit {
	ngOnInit(): void {
		console.log('shell works');
	}
}
