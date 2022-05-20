import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.style.scss']
})
export class MoviesComponent implements OnInit {

  

  constructor(private movSrv: MoviesService) { }

  ngOnInit(): void {
  }

}
