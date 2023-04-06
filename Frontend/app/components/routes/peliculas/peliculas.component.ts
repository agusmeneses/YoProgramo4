import { Component, OnInit } from '@angular/core';
import moviesMock from "../../../mocks/movies.mock.json"
import { IMovie } from 'src/app/interfaces/movies.interfaces';
import { Pipe, PipeTransform } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  filteredmovies: IMovie[]=[]
  filter: string="";
  movieSeriesOrigRow: IMovie[]=[];
  movieSeriesRow: IMovie[]=[];
  movieSeriesRow2: IMovie[]=[];
  toSearch: string="";
  actual: string="";
  cant: number=0;

  //Url para obtener imagenes
  urlImage: string= 'https://image.tmdb.org/t/p/w500';
  
  
  constructor(public _moviesService: MoviesService) { }
 
  ngOnInit(): void {
 
    this.filter = ""
    this.actual="Peliculas"
    this._moviesService.getMovies(1).subscribe(
      (response: any) => {
        console.log("Success movies",response);
        this.movieSeriesOrigRow = response.results
        this.movieSeriesRow = response.results
        this.cant=this.movieSeriesRow.length
      }  
    )

  }

  search(arg:any){
    this.movieSeriesRow = this.movieSeriesOrigRow.filter((obj) => {
      if (obj.title?.toLowerCase().includes(this.toSearch.toLowerCase())){
        return obj.title?.toLowerCase().includes(this.toSearch.toLowerCase());
      }
      else{
        return obj.name?.toLowerCase().includes(this.toSearch.toLowerCase());
      };       
    });

    this.cant = this.movieSeriesRow.filter((obj) => {
      if (obj.title?.toLowerCase().includes(this.toSearch.toLowerCase())){
        return obj.title?.toLowerCase().includes(this.toSearch.toLowerCase());
      }
      else{
        return obj.name?.toLowerCase().includes(this.toSearch.toLowerCase());
      };       
    }).length;
  }

}



