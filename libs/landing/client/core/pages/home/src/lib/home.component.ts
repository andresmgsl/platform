import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
	selector: 'heavy-duty-home',
	template: `
		<section class="flex justify-center w-full max-w-[1024px] mb-24">
			<div class="mr-10 mt-24 hidden sm:block">
				<img
					src="assets/images/home/left-home-photo.png"
					alt="left torn street photo"
				/>
			</div>

			<div>
				<img
					class="max-w-[490px] w-full"
					src="assets/images/home/main_graffiti.png"
					alt="Main Heavy Duty Graffiti Tag"
				/>
			</div>

			<div class="ml-10 mt-24 hidden sm:block">
				<img
					src="assets/images/home/right-home-photo.png"
					alt="left torn street photo"
				/>
			</div>
		</section>

		<section class="w-full max-w-[1024px] bp-formatted-text">
			<h2
				class="bp-graffiti-font text-[#FFA300] text-6xl mb-2 sm:mb-6 sm:text-9xl"
			>
				Our Services
			</h2>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit
				ipsum ut est luctus imperdiet. Integer dui tortor, pellentesque vel
				purus vel, porttitor maximus lorem. Fusce elit dui, hendrerit eget
				interdum mattis, venenatis mattis erat. Duis ex orci, tincidunt quis
				bibendum nec, cursus id libero. Pellentesque habitant morbi tristique
				senectus et netus et malesuada fames ac turpis egestas. Mauris eget
				malesuada velit, id auctor sem. Morbi finibus augue ultrices, placerat
				orci quis, sagittis velit.
			</p>

			<p class="bp-graffiti-font text-4xl sm:text-6xl">Bounty Program</p>

			<div class="mb-4">
				<img
					src="assets/images/services/bounty_bogota.jpg"
					alt="Bounty program Bogotá"
				/>
			</div>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit
				ipsum ut est luctus imperdiet. Integer dui tortor, pellentesque vel
				purus vel, porttitor maximus lorem. Fusce elit dui, hendrerit eget
				interdum mattis, venenatis mattis erat. Duis ex orci, tincidunt quis
				bibendum nec, cursus id libero. Pellentesque habitant morbi tristique
				senectus et netus et malesuada fames ac turpis egestas. Mauris eget
				malesuada velit, id auctor sem. Morbi finibus augue ultrices, placerat
				orci quis, sagittis velit.
			</p>

			<div class="mb-4">
				<img
					src="assets/images/services/bounty-lisbon.jpg"
					alt="Bounty program Lisbon"
				/>
			</div>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit
				ipsum ut est luctus imperdiet. Integer dui tortor, pellentesque vel
				purus vel, porttitor maximus lorem. Fusce elit dui, hendrerit eget
				interdum mattis, venenatis mattis erat. Duis ex orci, tincidunt quis
				bibendum nec, cursus id libero. Pellentesque habitant morbi tristique
				senectus et netus et malesuada fames ac turpis egestas. Mauris eget
				malesuada velit, id auctor sem. Morbi finibus augue ultrices, placerat
				orci quis, sagittis velit.
			</p>

			<div class="mb-4">
				<img
					src="assets/images/services/bounty_usa_1.png"
					alt="Bounty program CalHacks x HackTX"
				/>
			</div>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit
				ipsum ut est luctus imperdiet. Integer dui tortor, pellentesque vel
				purus vel, porttitor maximus lorem. Fusce elit dui, hendrerit eget
				interdum mattis, venenatis mattis erat. Duis ex orci, tincidunt quis
				bibendum nec, cursus id libero. Pellentesque habitant morbi tristique
				senectus et netus et malesuada fames ac turpis egestas. Mauris eget
				malesuada velit, id auctor sem. Morbi finibus augue ultrices, placerat
				orci quis, sagittis velit.
			</p>

			<p class="bp-graffiti-font text-4xl sm:text-6xl">Bulldozer</p>

			<p>
				Bulldozer is a low code platform that uses abstractions that are common
				for developers to build Solana programs, it’s powered by Anchor
				Framework. It gives developers the ability to manage their program’s
				ecosystem through a UI, hiding all the gory details so they can focus on
				the business logic.
			</p>

			<div class="mb-4">
				<img
					src="assets/images/services/bulldozer.png"
					alt="Bulldozer main page"
				/>
			</div>

			<p>
				It consists of an Anchor workspace and an Angular application, the
				Anchor workspace holds the content of the Bulldozer program, it's used
				as decentralized storage. The reason we store all the data on-chain is
				that we want to unlock real-time collaboration while building systems.
			</p>

			<p>
				For more info, please visit the
				<a href="https://github.com/heavy-duty/platform" target="_blank"
					>official repo</a
				>
			</p>

			<h2
				class="bp-graffiti-font text-[#FFA300] text-6xl mb-2 sm:mb-6 sm:text-9xl"
			>
				Contact us
			</h2>

			<p>
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
	@HostBinding('class') class =
		'flex flex-col text-[#e6e6e6] bp-bg-street-under-two px-4 py-5 items-center bp-min-h-content sm:px-6';
	ngOnInit(): void {
		console.log('Testing');
	}
}
