import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { IngresarComponent } from './components/routes/ingresar/ingresar.component';
import { PeliculasComponent } from './components/routes/peliculas/peliculas.component';
import { SeriesComponent } from './components/routes/series/series.component';
import { InicioComponent } from './components/routes/inicio/inicio.component';
import { ErrorComponent } from './components/routes/error/error.component';
import { RegistrarComponent } from './components/routes/registrar/registrar.component';
import { TvdetalilsComponent } from './components/routes/tvdetalils/tvdetalils.component';
import { MoviedetailsComponent } from './components/routes/moviedetails/moviedetails.component';
import { DashboardComponent } from './components/routes/dashboard/dashboard.component';
import { AgregarComponent } from './components/routes/agregar/agregar.component';
import { MisSeriesComponent } from './components/routes/mis-series/mis-series.component';
import { MisPelisComponent } from './components/routes/mis-pelis/mis-pelis.component';


const routes: Routes = [
  {
    path: 'inicio',component: InicioComponent,
  },
  {
    path: 'series',component: SeriesComponent,
  },
  {
    path: 'pelis',component: PeliculasComponent,
  },
  {
    path: 'ingresar',component: IngresarComponent,
  },
  {
    path:'registrar', component: RegistrarComponent,
  },
  {
    path:'tvdetail/:id', component: TvdetalilsComponent,
  },
  {
    path:'moviedetail/:id', component: MoviedetailsComponent,
  },
  {
    path:'dash', component: DashboardComponent, 
  },
  {
    path: 'agregar', component: AgregarComponent,
  },
  {
    path: 'mis-series', component: MisSeriesComponent,
  },
  {
    path: 'mis-pelis', component: MisPelisComponent,
  },
  {
    path: '',component: InicioComponent,
  },
  {
    path:"**", component: ErrorComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
