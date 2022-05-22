import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRouterModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MaterialAllModule } from '../../material-all.module'






@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRouterModule,
    MaterialAllModule,
  ]
})
export class ProfileModule { }
