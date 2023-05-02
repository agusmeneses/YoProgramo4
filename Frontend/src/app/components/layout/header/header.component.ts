import { Component, OnInit,Input } from '@angular/core';
import { IngresarComponent } from '../../routes/ingresar/ingresar.component';
import { Location } from '@angular/common';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  logeado: any
  
  constructor(public authService: AuthService,private router : Router) { }
  

  ngOnInit(): void {
    this.logeado=true
    this.authService.getUserLogged().subscribe(
      response => {
        if (response){
          this.logeado=true
        }else{
          this.logeado=false
        }
      }
    )
  }

  logOut(){
    this.authService.logout()
    this.router.navigate(["/ingresar"])
    console.log("Logged out")
  }

}
