import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeavyDutyLandingNavbarComponent } from './navbar.component';

@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [HeavyDutyLandingNavbarComponent],
	exports: [HeavyDutyLandingNavbarComponent],
})
export class LandingNavbarModule {}
