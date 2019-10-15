import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { EspeciesService } from "../../../servicios/especies.service";
import { Especie } from "../../../clases/especie";
@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.css']
})
export class EspeciesComponent implements OnInit {

  especies: Observable<Especie[]>;

  constructor(private especieSrv:EspeciesService) { }

  ngOnInit() {
    this.especieSrv.getEspecies().subscribe(
      data => {        
        this.especies = data['results'];        
      });      
  }

}
