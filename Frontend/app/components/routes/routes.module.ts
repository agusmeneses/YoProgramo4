import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TituloComponent } from './titulo/titulo.component';
import { MisSeriesComponent } from './mis-series/mis-series.component';
import { MisPelisComponent } from './mis-pelis/mis-pelis.component';


@NgModule({
  declarations: [
    TituloComponent,
    
  ],
  imports: [
    CommonModule,

  ],
  exports:[TituloComponent]
})
export class RoutesModule { }
