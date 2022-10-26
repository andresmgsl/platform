import { Component, HostBinding } from '@angular/core';

@Component({
	selector: 'heav-duty-services',
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

		<section class="w-full max-w-[1024px] bp-formatted-text"></section>
	`,
	styles: [],
})
export class ServiceComponent {
	@HostBinding('class') class =
		'flex flex-col text-[#e6e6e6] bp-bg-street-under-two px-4 py-5 items-center bp-min-h-content sm:px-6';
}
