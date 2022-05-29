import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Main page';

  constructor(private router: Router) { }

  gotoSignup() {
    this.router.navigate(['/signup']);  // define your component where you want to go
  }
  gotoLogin() {
    this.router.navigate(['/login']);  // define your component where you want to go
  }

}
