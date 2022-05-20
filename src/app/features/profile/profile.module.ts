import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRouterModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';




@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRouterModule
  ]
})
export class ProfileModule { }
