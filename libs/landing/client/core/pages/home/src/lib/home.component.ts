import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
	selector: 'heavy-duty-home',
	template: `
		<section class="flex justify-center w-full max-w-[1200px] mb-32">
			<div class="mr-10 mt-24 hidden sm:block">
				<img
					src="assets/images/home/left-home-photo.png"
					alt="left torn street photo"
				/>
			</div>

			<div>
				<img
					class="max-w-[490px] w-full mt-8 sm:mt-0"
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

		<section class="w-full max-w-[1200px] bp-formatted-text mb-24">
			<h2
				class="bp-graffiti-font text-[#FFA300] text-6xl mb-2 sm:mb-6 sm:text-9xl"
			>
				About us
			</h2>

			<div class="flex flex-col items-center sm:block">
				<div class="mb-4 sm:mr-8 sm:float-left order-2 sm:order-1">
					<img
						class="mx-auto my-0 relative l-0 r-0"
						src="assets/images/home/about_us.png"
						alt="About us"
					/>
				</div>
				<div class="sm:float-none order-1 sm:order-2">
					<p>
						We are a group of soldiers that are aiming to create a DAO of
						Builders from Solana that builds tools for the community to
						facilitate the whole ecosystem's growth.
					</p>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit
						ipsum ut est luctus imperdiet. Integer dui tortor, pellentesque vel
						purus vel, porttitor maximus lorem. Fusce elit dui, hendrerit eget
						interdum mattis, venenatis mattis erat. Duis ex orci, tincidunt quis
						bibendum nec, cursus id libero. Pellentesque habitant morbi
						tristique senectus et netus et malesuada fames ac turpis egestas.
						Mauris eget malesuada velit, id auctor sem. Morbi finibus augue
						ultrices, placerat orci quis, sagittis velit.
					</p>
				</div>
			</div>
		</section>

		<section class="w-full max-w-[1200px] bp-formatted-text mb-24">
			<h2
				class="bp-graffiti-font text-[#FFA300] text-6xl mb-2 sm:mb-6 sm:text-9xl"
			>
				Our Services
			</h2>

			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit
				ipsum ut est luctus imperdiet. Integer dui tortor, pellentesque vel
				purus vel, porttitor maximus lorem.
			</p>

			<h3 class="bp-graffiti-font text-4xl sm:text-6xl">Bounty Program</h3>

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

			<div class="flex flex-col mb-6 sm:flex-row sm:justify-center">
				<div>
					<a
						href="https://solana-colombia-hacker-house.heavyduty.builders"
						target="_blank"
					>
						<img
							class="sm:w-80 -rotate-2"
							src="assets/images/services/bounty_bogota.png"
							alt="Bounty program Bogotá"
						/>
					</a>
				</div>

				<div class="bp-disc -mt-[40%] sm:mt-0 sm:-ml-24">
					<a href="https://university.heavyduty.builders" target="_blank">
						<img
							class="sm:w-80 rotate-3"
							src="assets/images/services/bounty_usa_1.png"
							alt="Bounty program CalHacks x HackTX"
						/>
					</a>
				</div>
			</div>

			<h3 class="bp-graffiti-font text-4xl sm:text-6xl">Bulldozer</h3>

			<p>
				Bulldozer is a low code platform that uses abstractions that are common
				for developers to build Solana programs, it’s powered by Anchor
				Framework. It gives developers the ability to manage their program’s
				ecosystem through a UI, hiding all the gory details so they can focus on
				the business logic.
			</p>

			<div class="mb-4 mr-8 sm:float-left">
				<a href="https://bulldozer.heavyduty.builders" target="_blank">
					<img
						class="max-w-[800px] w-full"
						src="assets/images/services/bulldozer.png"
						alt="Bulldozer main page"
					/>
				</a>
			</div>

			<div class="sm:float-none">
				<p>
					It consists of an Anchor workspace and an Angular application, the
					Anchor workspace holds the content of the Bulldozer program, it's used
					as decentralized storage. The reason we store all the data on-chain is
					that we want to unlock real-time collaboration while building systems.
				</p>

				<p>
					For more info, please visit the
					<a href="https://github.com/heavy-duty/platform" target="_blank"
						>official repository</a
					>.
				</p>
			</div>
		</section>

		<section class="w-full max-w-[1200px] bp-formatted-text mb-24">
			<h2
				class="bp-graffiti-font text-[#FFA300] text-6xl mb-2 sm:mb-6 sm:text-9xl"
			>
				Contact us
			</h2>

			<div class="flex flex-col items-center sm:block">
				<div class="float-left mb-4 mr-4 order-2 sm:order-1">
					<img src="assets/images/contact/phone.png" alt="Contact old phone" />
				</div>
				<p class="float-none order-1 sm:order-2">
					If you want to contact us, feel free to reach out at
					<a href="mailto:team@heavyduty.builders">team@heavyduty.builders</a>
					or join us on Discord and Twitter. We would be very happy to talk to
					you.
				</p>
				<!-- <div class="mb-4 mr-4">
					<img
						src="assets/images/contact/contact_card.png"
						alt="Heavy Duty Presentation Card"
					/>
				</div> -->
			</div>
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
