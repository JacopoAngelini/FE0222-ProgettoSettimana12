import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Movies } from 'src/app/interface/movies';
import { Subscription } from 'rxjs';
import { Favorites } from 'src/app/interface/favorites';


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
  favorites!: number[];
  id!:number;



  constructor(private movSrv: MoviesService, private autSrv: AuthService) { 
    
  }

  ngOnInit() {
    this.getMovies();
    this.getFav();
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

  

 

 

 

 
}




  

  



