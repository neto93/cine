import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CardsPeliculaComponent } from './components/cards-pelicula/cards-pelicula.component';
import { RUTAS_APP } from './app.routes';
import { ImahenPipe } from './pipes/imahen.pipe';
import { SinopsisComponent } from './components/sinopsis/sinopsis.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResultadosComponent,
    NotFoundComponent,
    InicioComponent,
    CardsPeliculaComponent,
    ImahenPipe,
    SinopsisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RUTAS_APP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
