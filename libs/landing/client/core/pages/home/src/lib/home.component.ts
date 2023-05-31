import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
	selector: 'heavy-duty-home',
	template: `
		<section
			class="flex justify-center w-full max-w-[1200px] mb-20 md:mb-26 lg:mb-36 mt-24"
		>
			<div class="mr-10 mt-24 hidden sm:block">
				<img
					src="assets/images/home/left-home-photo.webp"
					alt="left torn street photo"
					width="224"
					height="377"
				/>
			</div>

			<div>
				<img
					class="max-w-[490px] w-full mt-8 sm:mt-0"
					src="assets/images/home/main_graffiti.webp"
					alt="Main Heavy Duty Graffiti Tag"
					alt="Heavy Duty Flat Face logo"
					width="490"
					height="490"
				/>
			</div>

			<div class="ml-10 mt-24 hidden sm:block">
				<img
					src="assets/images/home/right-home-photo.webp"
					alt="left torn street photo"
					width="234"
					height="399"
				/>
			</div>
		</section>

		<section class="w-full max-w-[1200px] mb-24 md:mb-28">
			<div class="flex justify-center mb-12 relative">
				<img
					class="w-[250px]"
					src="assets/images/logo.webp"
					alt="About us"
					width="250"
					height="298"
				/>
			</div>
			<div class="flex flex-col justify-center sm:flex-row relative">
				<h2
					class="bp-graffiti-font text-[#FFA300] mr-20 text-6xl md:text-7xl lg:text-8xl"
				>
					About us
				</h2>
				<p
					class="md:text-xl sm:max-w-[350px] md:max-w-[400px] lg:max-w-[600px]"
				>
					We're a group of devs that believe in the power of OSS to facilitate
					people's lives and don't care about chewing glass in the process. We
					want to unite forces with more builders like us in the Solana
					ecosystem, call it a DAO if you want, but we mean so much more.
				</p>
			</div>
		</section>

		<section
			class="relative w-full flex flex-col items-center max-w-[1200px] mb-24 md:mb-28"
		>
			<h2
				class="bp-graffiti-font text-[#FFA300] mb-2 text-6xl md:text-7xl lg:text-8xl"
			>
				Bounty Program
			</h2>
			<div class="lg:float-none relative top-10 max-w-[700px] mb-32">
				<p class="md:text-xl mb-4">
					Basically a bunch of challenges to learn and earn in Solana. Imagine
					earning reputation points and Proof-of-Work(s) as a beginner or pro of
					web3.
				</p>
				<p class="md:text-xl">
					You can find different levels of difficulty so people without a web3
					background can improve their skills (and even deploy their first
					program on-chain).
				</p>
			</div>

			<div class="flex flex-col sm:flex-row px-8 sm:px-0">
				<div class="bp-disc -rotate-12">
					<a href="https://university.heavyduty.builders" target="_blank">
						<img
							class="sm:w-80"
							src="assets/images/services/bounty_usa_1.webp"
							alt="Bounty program CalHacks x HackTX"
							width="320"
							height="320"
						/>
					</a>
				</div>

				<div class="bp-disc rotate-12 sm:mt-0">
					<a
						href="https://solana-colombia-hacker-house.heavyduty.builders"
						target="_blank"
					>
						<img
							class="sm:w-80"
							src="assets/images/services/bounty_bogota.webp"
							alt="Bounty program Bogotá"
							width="320"
							height="320"
						/>
					</a>
				</div>

				<div class="bp-disc -rotate-12 sm:mt-0">
					<a href="https://lisboa.heavyduty.builders" target="_blank">
						<img
							class="sm:w-80"
							src="assets/images/services/bounty_lisbon.webp"
							alt="Bounty program Lisbon"
							width="320"
							height="320"
						/>
					</a>
				</div>
			</div>
		</section>

		<section
			class="relative w-full flex flex-col items-center max-w-[1200px] mb-24 md:mb-28"
		>
			<h2
				class="bp-graffiti-font text-[#FFA300] mb-10 text-6xl md:text-7xl lg:text-8xl"
			>
				Contact Us
			</h2>

			<div class="w-full flex justify-center lg:justify-end lg:mr-36">
				<div class="absolute hidden lg:block lg:mr-80 xl:mr-96">
					<div>
						<img
							class="w-full max-w-[610px]"
							src="assets/images/home/bubble.webp"
							alt="Bubble contact - Heavy Duty"
							width="610"
							height="425"
						/>
					</div>
					<div class="absolute max-w-[300px] top-20 left-14">
						<p class="md:text-xl mb-4">
							We have a community of builders that is growing every day and
							delivering amazing projects.
						</p>

						<p class="md:text-xl">
							Looking for web3 consultants? Send us a email here
							<a href="mailto:team@heavyduty.builders"
								>team@heavyduty.builders</a
							>
						</p>
					</div>
				</div>
				<div
					class="sm:ml-6 lg:ml-12 sm:basis-[200px] md:basis-[300px] lg:basis-[400px] xl:ml-16 xl:basis-[500px] sm:shrink-0"
				>
					<img
						class="w-full"
						src="assets/images/contact/phone.webp"
						alt="Contact us phone"
						width="500"
						height="701"
					/>
				</div>
			</div>

			<div class="lg:hidden mt-10 w-full max-w-[500px]">
				<p class="md:text-xl mb-4">
					We have a community of builders that is growing every day and
					delivering amazing projects.
				</p>

				<p class="md:text-xl">
					Looking for web3 consultants? Send us a email here
					<a href="mailto:team@heavyduty.builders">team@heavyduty.builders</a>
				</p>
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
