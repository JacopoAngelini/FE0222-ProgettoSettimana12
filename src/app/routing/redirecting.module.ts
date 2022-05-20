import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RedirectingRouterModule } from './redirecting-routing.module';
import { RedirectingComponent } from './redirecting.component';



@NgModule({
  declarations: [RedirectingComponent],
  imports: [
    CommonModule,
    RedirectingRouterModule
  ],
})
export class RedirectingModule { }
