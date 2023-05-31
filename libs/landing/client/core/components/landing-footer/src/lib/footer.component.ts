import { Component } from '@angular/core';

@Component({
	selector: 'heavy-duty-landing-footer',
	template: `
		<footer
			class="w-full flex flex-col sm:flex-row items-center sm:justify-between text-[#e6e6e6] px-4 sm:px-6 py-4 bg-black bg-opacity-60"
		>
			<div class="relative w-48">
				<img
					class="w-full"
					src="assets/images/beware.webp"
					alt="Beware Heavy Duty Builders sign"
					width="192"
          height="89"
				/>
			</div>
			<div class="flex gap-2 items-center">
				<a class="bp-heavy-duty text-sm" routerLink="/terms-conditions">
					Terms & Conditions
				</a>
				<p>-</p>
				<p class="bp-heavy-duty">🄯 2023 HeavyDuty</p>
			</div>
			<div class="relative w-36">
				<img
					class="w-full"
					src="assets/images/home/main_graffiti.webp"
					alt="Heavy Duty Builders main graffiti"
					width="144"
          height="144"
				/>
			</div>
		</footer>
	`,
	styles: [],
})
export class HeavyDutyLandingFooterComponent { }
