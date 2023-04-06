import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { RoutesModule } from './components/routes/routes.module';
import { SharedModule } from './components/shared/shared.module';
import { InicioComponent } from './components/routes/inicio/inicio.component';
import { SeriesComponent } from './components/routes/series/series.component';
import { PeliculasComponent } from './components/routes/peliculas/peliculas.component';
import { IngresarComponent } from './components/routes/ingresar/ingresar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AuthService } from './services/auth.service';
import { RegistrarComponent } from './components/routes/registrar/registrar.component';
import { TvdetalilsComponent } from './components/routes/tvdetalils/tvdetalils.component';
import { MoviedetailsComponent } from './components/routes/moviedetails/moviedetails.component';
import { DashboardComponent } from './components/routes/dashboard/dashboard.component';
import { ErrorComponent } from './components/routes/error/error.component';
import { AgregarComponent } from './components/routes/agregar/agregar.component';
import { MisPelisComponent } from './components/routes/mis-pelis/mis-pelis.component';
import { MisSeriesComponent } from './components/routes/mis-series/mis-series.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SeriesComponent,
    PeliculasComponent,
    IngresarComponent,
    RegistrarComponent,
    TvdetalilsComponent,
    MoviedetailsComponent,
    ErrorComponent,
    DashboardComponent,
    AgregarComponent,
    MisPelisComponent,
    MisSeriesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RoutesModule,
    SharedModule,
    HttpClientModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,

    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [IngresarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
