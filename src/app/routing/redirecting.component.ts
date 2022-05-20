import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redirecting',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class RedirectingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
