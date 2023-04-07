import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loggedUser: any
  User: any
  name: any
  userLocStg: any;
  userJSON: string | null = null;
  myMovies: any[] = [];
  cont_movies: number = 0;
  cont_series: number = 0;
  loaded: boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.getLocalStorage();
    if (!this.userLocStg) {
      window.location.href="/ingresar/"
    }else{
      this.loggedUser=true
      this.User=this.userLocStg.user
    }

    
    
  }
  
  

  getLocalStorage() {
    this.userJSON = localStorage.getItem('Usuario');
    if (this.userJSON) {
      this.userLocStg = JSON.parse(this.userJSON);
      console.log("Local storage: ",this.userLocStg)
    }
  }

 

}
