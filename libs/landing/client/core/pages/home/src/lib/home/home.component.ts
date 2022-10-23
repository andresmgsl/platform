import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'heavy-duty-home',
	template: `
		<section class="text-[#e6e6e6]">
			<h1 class="bp-graffiti-font text-8xl mb-10">Heavy Duty Builders</h1>

			<p class="w-[650px]">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit
				ipsum ut est luctus imperdiet. Integer dui tortor, pellentesque vel
				purus vel, porttitor maximus lorem. Fusce elit dui, hendrerit eget
				interdum mattis, venenatis mattis erat. Duis ex orci, tincidunt quis
				bibendum nec, cursus id libero. Pellentesque habitant morbi tristique
				senectus et netus et malesuada fames ac turpis egestas. Mauris eget
				malesuada velit, id auctor sem. Morbi finibus augue ultrices, placerat
				orci quis, sagittis velit.
			</p>
		</section>
	`,
	styles: [],
})
export class HomeComponent implements OnInit {
	ngOnInit(): void {
		console.log('Testing');
	}
}
