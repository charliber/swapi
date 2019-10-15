import { Component, OnInit } from '@angular/core';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';
import { Observable } from 'rxjs';
import { Vehiculo } from 'src/app/clases/vehiculo';

@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  vehiculos : Observable<Vehiculo[]>;

  constructor(private vehiculoSrv: VehiculosService) { }

  ngOnInit() {
    this.vehiculoSrv.getVehiculos().subscribe(data => {
      console.log(data);
      this.vehiculos = data['results'];
    });
  }

}
