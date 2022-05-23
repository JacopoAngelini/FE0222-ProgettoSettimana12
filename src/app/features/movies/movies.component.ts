import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Movies } from 'src/app/interface/movies';
import { Subscription } from 'rxjs';
import { Favorites } from 'src/app/interface/favorites';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.style.scss']
})
export class MoviesComponent implements OnInit {

  moviesData: Movies[] = [];
  url: string = 'http://image.tmdb.org/t/p/w500';
  sub!: Subscription;
  sub2!: Subscription;
  router: any;
  favorites: number[] = [];
  id!:number;



  constructor(private movSrv: MoviesService, private autSrv: AuthService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
  }

  ngOnInit() {
    this.getMovies();
    this.getFav();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }

  logout(){
    this.autSrv.logout()
  }

  getMovies(){
    this.sub = this.movSrv.getMovies().subscribe((arg: Movies[]) => {
      this.moviesData = arg;
      console.log(this.moviesData);
    });
  }

  getFav(){
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    this.sub2 = this.movSrv.getFav(userData.user.id).subscribe((args: Favorites[]) => {
      args.forEach((arg) => {
        if (arg.userId == userData.user.id){
          this.favorites.push(arg.movieId)
        }
      })

    });;
  }

  findFav(id: number): boolean{
    for(let i = 0; i < (this.favorites).length; i++){
      if(this.favorites[i] == id){
        console.log(this.favorites[i])
        return true;
      }
    }
    return false;
  }










}










