import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { PeliculasService } from "../../../servicios/peliculas.service";
import { Pelicula } from "../../../clases/pelicula";

@Component({
  //selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  id:string;
  pelicula: Pelicula;
  safeSrc: SafeResourceUrl;

  constructor(private activatedRoute: ActivatedRoute,private peliculaSrv:PeliculasService,private sanitizer: DomSanitizer) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    //this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.safeUrls[this.id]);
    
  }

  ngOnInit() {
    switch(this.id){
      case '4':this.id = '1';
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/beAH5vea99k");
        break;
      case '5':this.id = '2';
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/xr3hPFJAHO4");
        break;
      case '6':this.id = '3';
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/yhuKapE-Bio");
        break;
      case '1':this.id = '4';
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/n1CUHjrc9Sc");
        break;
      case '2':this.id = '5';
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/DywnxIuPtUs");
        break;
      case '3':this.id = '6';
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/kqkfjBKmWc4");
        break;
      case '7':
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/V8qlIZsutAQ");
        break;
    }
    
    this.peliculaSrv.getPelicula(this.id).subscribe(data => {
      // console.log(data);
      this.pelicula = data;
    });
  }

}
