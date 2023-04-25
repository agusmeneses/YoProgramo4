import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { IngresarComponent } from './components/routes/ingresar/ingresar.component';
import { InicioComponent } from './components/routes/inicio/inicio.component';
import { ErrorComponent } from './components/routes/error/error.component';
import { DashboardComponent } from './components/routes/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'inicio',component: InicioComponent,
  },
  {
    path: 'ingresar',component: IngresarComponent,
  },
  {
    path:'dash', component: DashboardComponent, 
  },
  {
    path: '',redirectTo: "ingresar",pathMatch:"full"
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
