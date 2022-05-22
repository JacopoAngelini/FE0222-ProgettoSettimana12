import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/user';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.style.scss']
})
export class ProfileComponent implements OnInit {
  
  userData! : User;

  constructor(private autSrv: AuthService) { }

  ngOnInit(): void {
    this.getUserInfo()
  }

  getUserInfo(){
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.userData.user);
  }

  logout(){
    this.autSrv.logout()
  }

}
