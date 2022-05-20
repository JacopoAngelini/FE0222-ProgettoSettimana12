import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRouterModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';





@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRouterModule
  ]
})
export class MoviesModule { }
