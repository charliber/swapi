import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl = 'https://swapi.co/api/films';

  constructor(private http: HttpClient) { }

  getPeliculas():Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.baseUrl);
  }

  getPelicula(id:string):Observable<Pelicula> {
    return this.http.get<Pelicula>(this.baseUrl+'/'+id);
  }
 
}
