import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { IngresarComponent } from './components/routes/ingresar/ingresar.component';
import { InicioComponent } from './components/routes/inicio/inicio.component';
import { ErrorComponent } from './components/routes/error/error.component';
import { GuardGuard } from './servicios/guard.guard';


const routes: Routes = [
  {
    path: 'https://argentina-programa-14751.web.app/inicio',component: InicioComponent, canActivate:[GuardGuard]
  },
  {
    path: 'https://argentina-programa-14751.web.app/ingresar',component: IngresarComponent,
  },
  {
    path: 'https://argentina-programa-14751.web.app/',component: IngresarComponent,
  },
  {
    path:"https://argentina-programa-14751.web.app/**", component: ErrorComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
