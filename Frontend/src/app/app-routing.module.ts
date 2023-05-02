import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { IngresarComponent } from './components/routes/ingresar/ingresar.component';
import { InicioComponent } from './components/routes/inicio/inicio.component';
import { ErrorComponent } from './components/routes/error/error.component';
import { GuardGuard } from './servicios/guard.guard';


const routes: Routes = [
  {
    path: 'inicio',component: InicioComponent, canActivate:[GuardGuard]
  },
  {
    path: 'ingresar',component: IngresarComponent,
  },
  {
    path: '',component: IngresarComponent,
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
