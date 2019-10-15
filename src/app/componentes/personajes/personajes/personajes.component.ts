import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PersonajesService } from "../../../servicios/personajes.service";
import { Personaje } from "../../../clases/personaje";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes: Observable<Personaje[]>;

  constructor(private personajeSrv:PersonajesService) { }

  ngOnInit() {
    this.personajeSrv.getPersonajes().subscribe(
      data => {        
        this.personajes = data['results'];        
      });      
  }

}
