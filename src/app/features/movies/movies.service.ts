import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Movies } from 'src/app/interface/movies';
import { Favorites } from 'src/app/interface/favorites';
import { User } from '../../interface/user';




@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url = 'http://localhost:4201';

  userData! : User;
  idFav!: number

  constructor(private http: HttpClient, private router: Router) {
    this.getUserInfo(); 
  }

  getUserInfo(){
    this.userData = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.userData.user);
  }

  getMovies(): Observable<Movies[]>{
    return this.http.get<Movies[]>(`${this.url}/movies-popular`);
  }

  getFav(id: string): Observable<Favorites[]>{
    return this.http.get<Favorites[]>(`${this.url}/api/favorites?userId=${id}`);
  }

  like(movie: Movies){
    this.idFav = 0
    const favorite: Favorites = {
      movieId: movie.id,
      userId: this.userData.user.id,
      id: this.idFav++
    }
    return this.http.post<Favorites>(`${this.url}/api/favorites?userId=${this.userData.user.id}`, favorite)
  } 

  unlike(movie: Movies, index: number){
    return this.http.delete(`${this.url}/api/favorites/${index}`)
 }

}



