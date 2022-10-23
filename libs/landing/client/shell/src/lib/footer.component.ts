import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
	selector: 'heavy-duty-landing-footer',
	standalone: true,
	imports: [CommonModule],
	template: `
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
export class HeavyDutyLandingFooterComponent {}
