import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Vehiculo } from '../clases/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  private baseUrl = 'https://swapi.co/api/vehicles';

  constructor(private http: HttpClient) { }

  getVehiculos():Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(this.baseUrl);
  }

  getVehiculo(id:string):Observable<Vehiculo> {
    return this.http.get<Vehiculo>(this.baseUrl+'/'+id);
  }
}
 