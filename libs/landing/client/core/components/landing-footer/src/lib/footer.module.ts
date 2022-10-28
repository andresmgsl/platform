import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeavyDutyLandingFooterComponent } from './footer.component';

@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [HeavyDutyLandingFooterComponent],
	exports: [HeavyDutyLandingFooterComponent],
})
export class LandingFooterModule {}
