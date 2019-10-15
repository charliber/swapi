import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planeta } from 'src/app/clases/planeta';
import { PlanetasService } from 'src/app/servicios/planetas.service';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {

  id:any;
  planeta : Planeta;

  constructor(private activatedRoute: ActivatedRoute,private planetSrv: PlanetasService) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.planetSrv.getPlaneta(this.id).subscribe(data => {
      console.log(data);
      this.planeta = data;
    });
  }

}
