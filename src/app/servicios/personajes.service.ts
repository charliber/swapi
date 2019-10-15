import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Personaje } from '../clases/personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private baseUrl = 'https://swapi.co/api/people';

  constructor(private http: HttpClient) { }

  getPersonajes():Observable<Personaje[]> {
    return this.http.get<Personaje[]>(this.baseUrl);
  }

  getPersonaje(id:string):Observable<Personaje> {
    return this.http.get<Personaje>(this.baseUrl+'/'+id);
  }
}
 