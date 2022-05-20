import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RedirectingRouterModule } from './routing/redirecting-routing.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './auth/login/login.module'
import { RegisterModule } from './auth/register/register.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { MoviesModule } from './features/movies/movies.module';






@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RedirectingRouterModule,
    AuthModule,
    LoginModule,
    RegisterModule,
    MoviesModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    },
  ]
})
export class AppModule { }
