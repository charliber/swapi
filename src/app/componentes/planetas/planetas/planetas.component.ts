import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PlanetasService } from "../../../servicios/planetas.service";
import { Planeta } from "../../../clases/planeta";

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.css']
})
export class PlanetasComponent implements OnInit {

  planetas: Observable<Planeta[]>;

  constructor(private planetaSrv:PlanetasService) { }

  ngOnInit() {
    this.planetaSrv.getPlanetas().subscribe(
      data => {        
        this.planetas = data['results'];        
      });      
  }

}
