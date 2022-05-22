import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRouterModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';
import { MaterialAllModule } from '../../material-all.module'






@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    MoviesRouterModule,
    MaterialAllModule,
  ]
})
export class MoviesModule { }
