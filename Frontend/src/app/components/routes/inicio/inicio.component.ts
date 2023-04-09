import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
 
export class InicioComponent implements OnInit {
  miPorfolio: any;
  educationlist: any;
  skillslist: any;
  proyectlist: any;
  nombre:any;
  cargo:any;
  desc:any;
  


  constructor(private datosPorfolio: PorfolioService) { }

  ngOnInit(): void {
    
    this.datosPorfolio.obtenerDatos().subscribe (data =>{
      console.log(data)
      this.miPorfolio=data;
      this.educationlist=data.Educacion
      this.skillslist=data.Skills
      this.proyectlist=data.Proyectos
      this.nombre=data.Nombre
      this.cargo=data.Cargo
      this.desc=data.Desc
  
    });
  }

}
