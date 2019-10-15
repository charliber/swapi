import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Planeta } from '../clases/planeta';

@Injectable({
  providedIn: 'root'
})
export class PlanetasService {

  private baseUrl = 'https://swapi.co/api/planets';

  constructor(private http: HttpClient) { }

  getPlanetas():Observable<Planeta[]> {
    return this.http.get<Planeta[]>(this.baseUrl);
  }

  getPlaneta(id:string):Observable<Planeta> {
    return this.http.get<Planeta>(this.baseUrl+'/'+id);
  }
}
 