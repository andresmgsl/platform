import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'heavy-duty-home',
	template: `
		<header
			class="w-full flex justify-between text-[#e6e6e6] py-6 px-4 sm:px-6 bg-black"
		>
			<div class="flex items-center gap-4">
				<img
					class="w-12"
					src="assets/images/logo.png"
					alt="Heavy Duty Builders logo"
				/>
				<p class="hidden bp-heavy-duty sm:block text-2xl">HEAVY DUTY</p>
			</div>
			<div class="flex items-center gap-4">
				<a href="https://twitter.com/HeavyDutyBuild" target="_blank">
					<span> Twit </span>
				</a>

				<a href="https://github.com/heavy-duty" target="_blank">
					<span> Git </span>
				</a>

				<a href="https://discord.gg/gNZxv57x" target="_blank">
					<span> Dis </span>
				</a>
			</div>
		</header>

		<section
			class="flex bp-min-h-content text-[#e6e6e6] px-4 py-5 sm:px-6 sm:justify-center "
		>
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
		</section>

		<footer
			class="w-full flex flex-col sm:flex-row items-center sm:justify-between text-[#e6e6e6] px-4 sm:px-6 py-4 bg-black"
		>
			<div class="relative w-32">
				<img
					class="w-full"
					src="assets/images/beware.png"
					alt="Beware Heavy Duty Builders sign"
				/>
			</div>
			<p class="bp-heavy-duty mt-2">🄯 2022 HeavyDuty</p>
		</footer>
	`,
	styles: [],
})
export class HomeComponent implements OnInit {
	ngOnInit(): void {
		console.log('Testing');
	}
}
