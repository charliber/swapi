import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiculosService } from 'src/app/servicios/vehiculos.service';
import { Vehiculo } from 'src/app/clases/vehiculo';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  id:any;
  vehiculo : Vehiculo;

  constructor(private activatedRoute: ActivatedRoute,private vehiculoSrv: VehiculosService) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.vehiculoSrv.getVehiculo(this.id).subscribe(data => {
      // console.log(data);
      this.vehiculo = data;
    });
  }

}
