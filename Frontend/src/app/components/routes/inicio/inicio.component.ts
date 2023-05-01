import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
 
export class InicioComponent implements OnInit {
  miPorfolio: any;
  miPorfolio2: any;
  educationlist: any;
  skillslist: any;
  proyectlist: any;
  nombre:any;
  cargo:any;
  desc:any;
  loaded: boolean = false;
  


  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    
    this.datosPorfolio.obtenerDatos().subscribe (data =>{
      console.log(data)
      this.miPorfolio=data;

      this.nombre=data.nombre
      this.cargo=data.cargo
      
  
    });

    this.datosPorfolio.obtenerDatos2().subscribe (data =>{
      console.log(data)
      this.miPorfolio2=data;
      
      this.educationlist=data.Educacion
      this.skillslist=data.Skills
      this.proyectlist=data.Proyectos
      
      
      this.desc=data.Desc
      this.loaded=true
  
    });
  }

}
