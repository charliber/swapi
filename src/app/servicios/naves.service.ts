import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Nave } from '../clases/nave';

@Injectable({
  providedIn: 'root'
})
export class NavesService {

  private baseUrl = 'https://swapi.co/api/starships';

  constructor(private http: HttpClient) { }

  getNaves():Observable<Nave[]> {
    return this.http.get<Nave[]>(this.baseUrl);
  }

  getNave(id:string):Observable<Nave> {
    return this.http.get<Nave>(this.baseUrl+'/'+id);
  }
}
 