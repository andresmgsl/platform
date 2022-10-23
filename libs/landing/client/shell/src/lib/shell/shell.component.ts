import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'heavy-duty-shell',
	template: `
		<div
			id="main-content"
			class="p-6 bp-landing-font w-screen h-screen relative bg-[#121212]"
		>
			<router-outlet></router-outlet>
		</div>
	`,
	styles: [],
})
export class ShellComponent implements OnInit {
	ngOnInit(): void {
		console.log('shell works');
	}
}
