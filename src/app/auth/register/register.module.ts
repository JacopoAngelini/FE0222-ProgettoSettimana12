import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register.component';
import { AuthRoutingModule } from '../auth-routing.module';
import { MaterialAllModule } from '../../material-all.module';
import { FormsModule } from '@angular/forms';







@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialAllModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    AuthRoutingModule,
    MaterialAllModule,
    FormsModule
  ],
  
})
export class RegisterModule { }
