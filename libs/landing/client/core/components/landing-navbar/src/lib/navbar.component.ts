import { Component } from '@angular/core';

@Component({
	selector: 'heavy-duty-landing-navbar',
	template: ` <header
		class="fixed w-full flex justify-between text-[#e6e6e6] py-4 px-4 sm:px-6 bg-black z-20"
	>
		<a routerLink="/">
			<div class="flex items-center">
				<img
					class="w-12"
					src="assets/images/logo_flat.png"
					alt="Heavy Duty Flat Face logo"
				/>
			</div>
		</a>
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

			<a href="https://github.com/heavy-duty" target="_blank">
				<img
					class="w-7 sm:w-5"
					src="https://arweave.net/e0pqfj-Q_yjL8zpM_sVywk4T2kUkcvBDBNec6gtqNlg"
					alt="github icon"
				/>
			</a>
		</div>
	</header>`,
	styles: [],
})
export class HeavyDutyLandingNavbarComponent {}
