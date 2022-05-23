import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Movies } from 'src/app/interface/movies';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.style.scss']
})
export class MoviesComponent implements OnInit {

  moviesData: Movies[] = [];
  url!: string
  sub!: Subscription;
  router: any;

  constructor(private movSrv: MoviesService, private autSrv: AuthService) { }

  ngOnInit(): void {
    this.getMovies()
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  logout(){
    this.autSrv.logout()
  }

  getMovies(){
    this.sub = this.movSrv.getMovies().subscribe((arg: Movies[]) => {
      this.moviesData = arg;
      console.log(this.moviesData);
    });
    alert('questo weekend ho dovuto lavorare e quindi non ho avuto molto tempo. ho incontrato serie difficoltà nel cariare le copertine in quanto non riesco a farmi autorizzare ad accedere alla risorsa. quindi non sono riuscito a completare bene il progetto, mi spiace molto consegnare un progetto incompleto.')
  }

  getImages(){
    let token = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(token.accessToken);
    return token.accessToken
  }

  

  }



