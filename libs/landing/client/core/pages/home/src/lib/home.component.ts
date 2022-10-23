import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
	selector: 'heavy-duty-home',
	template: `
		<div class="mr-10 hidden sm:block">
			<img
				src="assets/images/home/left-home-photo.png"
				alt="left torn street photo"
			/>
		</div>

		<div>
			<h1
				class="bp-graffiti-font text-[#FFA300] text-6xl text-center mb-10 sm:text-8xl"
			>
				Heavy Duty Builders
			</h1>

			<p class="w-full max-w-[650px]">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit
				ipsum ut est luctus imperdiet. Integer dui tortor, pellentesque vel
				purus vel, porttitor maximus lorem. Fusce elit dui, hendrerit eget
				interdum mattis, venenatis mattis erat. Duis ex orci, tincidunt quis
				bibendum nec, cursus id libero. Pellentesque habitant morbi tristique
				senectus et netus et malesuada fames ac turpis egestas. Mauris eget
				malesuada velit, id auctor sem. Morbi finibus augue ultrices, placerat
				orci quis, sagittis velit.
			</p>
		</div>

		<div class="ml-10 hidden sm:block">
			<img
				src="assets/images/home/right-home-photo.png"
				alt="left torn street photo"
			/>
		</div>
	`,
	styles: [],
})
export class HomeComponent implements OnInit {
	@HostBinding('class') class =
		'flex text-[#e6e6e6] px-4 py-5 sm:px-6 sm:justify-center bp-min-h-content';
	ngOnInit(): void {
		console.log('Testing');
	}
}
