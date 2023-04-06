import { Component, OnInit } from '@angular/core';
import {Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MoviesService } from 'src/app/services/movies.service';
import { IMovie, IMovieUser } from 'src/app/interfaces/movies.interfaces';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})

export class AgregarComponent implements OnInit {

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

  userLocStg: any;
  userJSON: string | null = null;

  cont_pag: number=1;

  
  

  constructor(public authService: AuthService, public _moviesService: MoviesService) { }

  ngOnInit(): void {
    this.filter="Todos"
    this.getLocalStorage();
    if (!this.userLocStg) {
      window.location.href="/inicio/"
    }else{
      this.loggedUser=true
      this.User=this.userLocStg.user
    }

    
      this._moviesService.getTrending(1).subscribe(
        (response: any) => {
          console.log("Se trajo peliculas de la API",response);
  
          this.movieSeriesOrigRow = response.results
          this.movieSeriesRow = response.results
          this.cant=this.movieSeriesRow.length

          this.getMyList(this.myMovies, 'tv');
          this.getMyList(this.myMovies, 'movie');
        },
        error => {
          console.log("Error",error);
        }
      )
  }

  IncrementarCont(){
    this.cont_pag+=1
    this.MoverPagina(this.cont_pag)
  }

  DecrementarCont(){
    this.cont_pag-=1
    this.MoverPagina(this.cont_pag)
  }

  MoverPagina(numero: number){
    this._moviesService.getTrending(numero).subscribe(
      (response: any) => {
        console.log("Se trajo peliculas de la API",response);

        this.movieSeriesOrigRow = response.results
        this.movieSeriesRow = response.results
        this.cant=this.movieSeriesRow.length

        this.getMyList(this.myMovies, 'tv');
        this.getMyList(this.myMovies, 'movie');
      },
      error => {
        console.log("Error",error);
      }
    )
  }

  AgregarMovieSerie(value: any, type: string){
    this.movieUsuario = value
    this.movieUsuario.idUser = this.User.uid;
    console.log(this.movieUsuario)
    this._moviesService.addMovieSerie(this.User.uid,this.movieUsuario,type).then((ref) => {
      console.log('Documento añadido con ID: ',ref.id)
      this.movieUsuario.idGlobal=ref.id
  })
    this.agregar=false;

  }

  

  BorrarMovieSerie(movie:any, type: string){
    console.log(movie)
    console.log(this.movieUsuario)
    this._moviesService.deleteMovieSerie(this.User.uid,movie.idGlobal,type);
    movie.added=false
  }


  showUserData(){
    this.loggedUser= this.authService.getUserLogged().subscribe(
      response => {
        console.log('Registered | ',response);
      },
      error => {
        console.log(error);
      }
    )
  }

  logOut(){
    this.authService.logout()
    console.log("Logged out")
    window.location.href="/inicio/"
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



      
  getMyList(array: any, mediaType: string) {
    this._moviesService
      .getFromFirestore(this.User.uid, mediaType)
      .subscribe(
        (resp) => {
          array = [];
          resp.forEach((element: any) => {
            array.push({
              idGlobal: element.payload.doc.id,
              ...element.payload.doc.data()
              
            });
          });
          this.checkMatches(array);
          console.log(array)
        },
        (error) => {
          console.log(error);
        }
      );
  }

  
  checkMatches(array: any) {
    for (let item of this.movieSeriesRow) {
      if (item.name) {
        for (let serie of array) {
          if (item.name == serie.name) {
            item.added = true;
            console.log('Se encontro el match de: ',item.name)
            item.idGlobal = serie.idGlobal;
          }
        }
      } else if (item.title) {
        for (let movie of array) {
          if (item.title == movie.title) {
            item.added = true;
            console.log('Se encontro el match de: ',item.title)
            item.idGlobal = movie.idGlobal;
          }
        }
      }
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
