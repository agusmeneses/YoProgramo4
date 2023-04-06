import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service'
import { MoviesService } from 'src/app/services/movies.service';
import { IMovie } from 'src/app/interfaces/movies.interfaces';

@Component({
  selector: 'app-mis-series',
  templateUrl: './mis-series.component.html',
  styleUrls: ['./mis-series.component.css']
})
export class MisSeriesComponent implements OnInit {

  urlImage: string= 'https://image.tmdb.org/t/p/w500';
  filter: string="";
  movieSeriesRow: any;
  id: string=''
  loggedUser: any
  User: any
  name: any
  cant: number=0;
  movieSeriesOrigRow: IMovie[]=[];
  toSearch: string="";
  movieUsuario: any;
  agregar: boolean=true;
  myMovies: any[] = [];
  arr1: any[] = [];
  arr2: any[] = [];

  userLocStg: any;
  userJSON: string | null = null;

  constructor(public authService: AuthService, public _moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getLocalStorage();
    if (!this.userLocStg) {
      window.location.href="/inicio/"
    }else{
      this.loggedUser=true
      this.User=this.userLocStg.user
    }
    
    this.getMyListmovie(this.myMovies, 'tv');
    
    
  }

  getLocalStorage() {
    this.userJSON = localStorage.getItem('Usuario');
    if (this.userJSON) {
      this.userLocStg = JSON.parse(this.userJSON);
      console.log("Local storage: ",this.userLocStg)
    }
  }

  search(arg:any){
    this.movieSeriesRow = this.movieSeriesOrigRow.filter((obj) => {
      if (obj.title?.toLowerCase().includes(this.toSearch.toLowerCase())){
        return obj.title?.toLowerCase().includes(this.toSearch.toLowerCase());
      }
      else{
        return obj.name?.toLowerCase().includes(this.toSearch.toLowerCase());
      };       
    });}


  logOut(){
    this.authService.logout()
    console.log("Logged out")
    window.location.href="/inicio/"
  }

  BorrarMovieSerie(movie:any){
    console.log('TV: ',movie)
    console.log('TV id: ',movie.idGlobal)
    console.log('UID: ',this.User.uid)
    this._moviesService.deleteMovieSerie(this.User.uid,movie.idGlobal,'tv');
    this.getMyListmovie(this.myMovies, 'tv');
    movie.added=false

  }

  
  getMyListmovie(arraymov: any, mediaType: string) {
    this._moviesService
      .getFromFirestore(this.User.uid, mediaType)
      .subscribe(
        (resp) => {
          arraymov = [];
          resp.forEach((element: any) => {
            arraymov.push({
              idGlobal: element.payload.doc.id,
              added: true,
              ...element.payload.doc.data()
              
              
            });
            console.log(arraymov)
            
          }
          );
          this.movieSeriesRow=arraymov
          this.movieSeriesOrigRow=arraymov
          
        },
        (error) => {
          console.log(error);
        }
      );
  }

 
}

