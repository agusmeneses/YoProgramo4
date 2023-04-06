import { Component,Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { ITvdetail } from 'src/app/interfaces/tvdetail.iterfaces';

@Component({
  selector: 'app-tvdetalils',
  templateUrl: './tvdetalils.component.html',
  styleUrls: ['./tvdetalils.component.css']
})


export class TvdetalilsComponent{

  movie: any | ITvdetail[]=[];
  id: string='';
  urlImage: string= 'https://image.tmdb.org/t/p/w500';


  constructor(private route: ActivatedRoute, public _moviesService: MoviesService) { }

  ngOnInit(): void {

    console.log(this.route.snapshot.params.id);
    this.id=this.route.snapshot.params.id;


    this._moviesService.gettvdetail(this.id).subscribe((response: any) => {
      console.log("Success",response);
      this.movie=response
    },
    error => {
     console.log("Error") 
    }
    )
  }

  

}
