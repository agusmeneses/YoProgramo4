import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { RoutesModule } from './components/routes/routes.module';
import { SharedModule } from './components/shared/shared.module';
import { InicioComponent } from './components/routes/inicio/inicio.component';
import { IngresarComponent } from './components/routes/ingresar/ingresar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashboardComponent } from './components/routes/dashboard/dashboard.component';
import { ErrorComponent } from './components/routes/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    IngresarComponent,
    ErrorComponent,
    DashboardComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RoutesModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [IngresarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
