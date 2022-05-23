import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Movies } from 'src/app/interface/movies';
import { Favorites } from 'src/app/interface/favorites';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url = 'http://localhost:4201';

  constructor(private http: HttpClient, private router: Router) { 
  }

  getMovies(): Observable<Movies[]>{
    return this.http.get<Movies[]>(`${this.url}/movies-popular`);
  }

  getFav(id: string): Observable<Favorites[]>{
    return this.http.get<Favorites[]>(`${this.url}/favorites`);
  }








 }





