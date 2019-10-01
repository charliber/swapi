import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './componentes/principal/principal/principal.component';
import { MenuLateralComponent } from './componentes/menu/menu-lateral/menu-lateral.component';
import { EspeciesComponent } from './componentes/especies/especies/especies.component';
import { PersonajeComponent } from './componentes/personajes/personaje/personaje.component';
import { PersonajesComponent } from './componentes/personajes/personajes/personajes.component';
import { EspecieComponent } from './componentes/especies/especie/especie.component';
import { PlanetaComponent } from './componentes/planetas/planeta/planeta.component';
import { PlanetasComponent } from './componentes/planetas/planetas/planetas.component';
import { NaveComponent } from './componentes/naves/nave/nave.component';
import { NavesComponent } from './componentes/naves/naves/naves.component';
import { VehiculoComponent } from './componentes/vehiculos/vehiculo/vehiculo.component';
import { VehiculosComponent } from './componentes/vehiculos/vehiculos/vehiculos.component';
import { PeliculaComponent } from './componentes/peliculas/pelicula/pelicula.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas/peliculas.component';

@NgModule({
  declarations: [
    
  PrincipalComponent,
    
  MenuLateralComponent,
    
  EspeciesComponent,
    
  PersonajeComponent,
    
  PersonajesComponent,
    
  EspecieComponent,
    
  PlanetaComponent,
    
  PlanetasComponent,
    
  NaveComponent,
    
  NavesComponent,
    
  VehiculoComponent,
    
  VehiculosComponent,
    
  PeliculaComponent,
    
  PeliculasComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
