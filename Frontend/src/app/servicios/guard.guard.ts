import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { createFalse } from 'typescript';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  estado: any
  constructor(private auth: AuthService, private rutas:Router)
  {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree | any {

    this.auth.getUserLogged().subscribe(
      response => {
        if (response){
          this.estado=response
          console.log("Guard: Esta logueado")
          return true;
        }else{
          this.rutas.navigate(["/ingresar"])
          return false;
        }
      }
    )
  }
  
}
