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
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ErrorComponent } from './components/routes/error/error.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthService } from './servicios/auth.service';
import { PorfolioService } from './servicios/porfolio.service';
import { InterceptorService } from './servicios/interceptor.service';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    IngresarComponent,
    ErrorComponent,
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
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    provideAuth(() => getAuth()),

  ],
  providers: [IngresarComponent,PorfolioService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true},{ provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
