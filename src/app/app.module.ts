import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule,MatTableModule, MatListModule,MatButtonModule, MatTabsModule } from '@angular/material'
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

import { PrincipalComponent } from './componentes/principal/principal/principal.component';
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
    AppComponent,
    PrincipalComponent,      
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
    PeliculasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatTabsModule,
    MatTableModule,
    MatListModule,
    MatButtonModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
