import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Especie } from '../clases/especie';

@Injectable({
  providedIn: 'root'
})
export class EspeciesService {

  private baseUrl = 'https://swapi.co/api/species';

  constructor(private http: HttpClient) { }

  getEspecies():Observable<Especie[]> {
    return this.http.get<Especie[]>(this.baseUrl);
  }

  getEspecie(id:string):Observable<Especie> {
    return this.http.get<Especie>(this.baseUrl+'/'+id);
  }
}
 