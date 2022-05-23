import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userOBV = new BehaviorSubject<null | User>(null);
  user$ = this.userOBV.asObservable();

  url = 'http://localhost:4201';

  jwtSrv = new JwtHelperService()

  constructor(private http: HttpClient, private router:Router) { 
    this.getUserLog();
  }

 /* 
 login(data: { email: string; password: string }) {
    this.http.post<User>(`${this.url}/login`, data).subscribe((data) => {
        alert(data);
        this.userOBV.next(data);
        localStorage.setItem('user', JSON.stringify(data));
    })
  } 
  */

  login(data: { email: string; password: string }) {
    return this.http.post<User>(`${this.url}/login`, data).pipe(
      tap((data) => {
        console.log(data);
        this.userOBV.next(data);
        localStorage.setItem('user', JSON.stringify(data));
      })
    );
  }

  registration(data: { name: string; email: string; password: string }) {
    console.log(data);
    return this.http.post<User>(`${this.url}/register`, data);
  }

  getUserLog() {
    const user = localStorage.getItem('user');
    console.log(user)
    if (!user) {
      return;
    }
    const userdata: User = JSON.parse(user);
    if (this.jwtSrv.isTokenExpired(userdata.accessToken)) {
      return
    }
    this.userOBV.next(userdata)
  }

  
  logout(){
    let confirmOut = confirm("sicuro di voler uscire?");
    if (confirmOut){
      this.userOBV.next(null);
      localStorage.removeItem('user')
      this.router.navigate(['/login'])
    }
  }

  
  



}
