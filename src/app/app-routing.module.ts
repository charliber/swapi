import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: 'personajes', component: PersonajesComponent },
  { path: 'personaje/:id', component: PersonajeComponent },
  { path: 'planetas', component: PlanetasComponent },
  { path: 'planeta/:id', component: PlanetaComponent },
  { path: 'especies', component: EspeciesComponent },
  { path: 'especie/:id', component: EspecieComponent },
  { path: 'naves', component: NavesComponent },
  { path: 'nave/:id', component: NaveComponent },
  { path: 'vehiculos', component: VehiculosComponent },
  { path: 'vehiculo/:id', component: VehiculoComponent },
  { path: '', redirectTo: '/principal', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
