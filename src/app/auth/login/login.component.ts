import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/interface/user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.style.scss'],

})
export class LoginComponent implements OnInit {

  constructor(private autSrv: AuthService, private router: Router ) { }

  ngOnInit(): void {
  }

  async login(form: NgForm) {
    console.log(form.value);
    try {
      await this.autSrv.login(form.value).toPromise()
      this.router.navigate(['/'])
    } catch (error) {
      form.reset();
      alert('i dati non corrispondono o l\'utente non è registrato');
      console.error(error)
    }
  }

}
