import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.style.scss'],

})
export class RegisterComponent implements OnInit {

  constructor(private autSrv: AuthService, private router: Router ) { }

  ngOnInit(): void {
  }

  async registration(form: NgForm){
    console.log(form.value);
    try {
      await this.autSrv.registration(form.value).toPromise()
      alert('Registrazione effettuata con successo')
      this.router.navigate(['/login'])
    } catch (error) {
      form.reset();
      alert('Utente già registrato');
      console.error(error)
    }
  }
  

}
