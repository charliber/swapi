import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PeliculasService } from "../../../servicios/peliculas.service";
import { Pelicula } from "../../../clases/pelicula";

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  images = [`assets/images/episodio1.jpeg`, 
            `assets/images/episodio2.jpeg`,
            `assets/images/episodio3.jpeg`,
            `assets/images/episodio4.jpeg`,
            `assets/images/episodio5.jpeg`,
            `assets/images/episodio6.jpeg`,
            `assets/images/episodio7.jpeg`,
            `assets/images/episodio8.jpeg`,
            `assets/images/episodio9.jpeg`];

  peliculas: Observable<Pelicula[]>;

  constructor(private pelicularSrv:PeliculasService) { }

  ngOnInit() {
    this.pelicularSrv.getPeliculas().subscribe(
      data => {        
        this.peliculas = data['results'];        
      });      
  }

}
