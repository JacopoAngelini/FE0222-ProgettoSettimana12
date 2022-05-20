import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RedirectingComponent } from './redirecting.component';

const routes: Routes = [
  {
    path: '',
    component: RedirectingComponent,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../features/profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: '',
        loadChildren: () => import('../features/movies/movies.module').then((m) => m.MoviesModule),
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  

})
export class RedirectingRouterModule { }
