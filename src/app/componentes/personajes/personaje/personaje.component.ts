import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from "../../../servicios/personajes.service";
import { Personaje } from "../../../clases/personaje";

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  id:any;
  personaje: Personaje;

  constructor(private activatedRoute: ActivatedRoute,private personajeSrv:PersonajesService) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.personajeSrv.getPersonaje(this.id).subscribe(data => {
      console.log(data);
      this.personaje = data;
    });
  }
}
