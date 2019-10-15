import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EspeciesService } from "../../../servicios/especies.service";
import { Especie } from "../../../clases/especie";

@Component({
  selector: 'app-especie',
  templateUrl: './especie.component.html',
  styleUrls: ['./especie.component.css']
})
export class EspecieComponent implements OnInit {

  id:any;
  especie: Especie;

  constructor(private activatedRoute: ActivatedRoute,private especieSrv:EspeciesService) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.especieSrv.getEspecie(this.id).subscribe(data => {
      // console.log(data);
      this.especie = data;
    });
  }

}
