import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseLoginProvider } from 'angularx-social-login';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css'],
})
export class IngresarComponent implements OnInit {
  error: any
  userlogged: boolean = false;
  Form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
    this.userlogged=false
    this.error=false
    
  }


}
