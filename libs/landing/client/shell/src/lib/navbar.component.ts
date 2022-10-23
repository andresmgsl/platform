import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'heavy-duty-landing-navbar',
	standalone: true,
	imports: [CommonModule],
	template: ` <header
		class="w-full flex justify-between text-[#e6e6e6] py-6 px-4 sm:px-6 bg-black"
	>
		<div class="flex items-center gap-4">
			<img
				class="w-12"
				src="assets/images/logo.png"
				alt="Heavy Duty Builders logo"
			/>
			<p class="hidden bp-heavy-duty sm:block text-2xl">HEAVY DUTY 2</p>
		</div>
		<div class="flex items-center gap-6">
			<a href="https://twitter.com/HeavyDutyBuild" target="_blank">
				<img
					class="w-7 sm:w-5"
					src="https://arweave.net/9pVgL9J9m3KUjQLSjv5GsIpBPf64vY6HRp-INIyJEzM"
					alt="twitter icon"
				/>
			</a>

			<a href="https://discord.gg/gNZxv57x" target="_blank">
				<img
					class="w-7 sm:w-5"
					src="https://xycjqai56g6atvzjnkoo6jbfcdbh33hhuuqkb5pxaau64tyfeh2q.arweave.net/vgSYAR3xvAnXKWqc7yQlEMJ97OelIKD19wAp7k8FIfU"
					alt="discord icon"
				/>
			</a>
		</div>
	</header>`,
	styles: [],
})
export class HeavyDutyLandingNavbarComponent {}
