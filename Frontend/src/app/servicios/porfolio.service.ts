import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  url: string="https://argprog-backend-uaep.onrender.com/buscar/"

  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<any>{
    console.log("El servicio Porfolio está corriendo correctamente")
    return this.http.get<any>(this.url+"1");
  }
  obtenerDatos2(): Observable<any>{
    return this.http.get("./assets/data/data.json");
  }
}
