import { Component, OnInit } from '@angular/core'
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
  

  onSubmit(fm: NgForm) {
    console.log('form submitted.');
    console.log(fm.value);
  }

}

