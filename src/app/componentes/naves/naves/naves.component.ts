import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { NavesService } from "../../../servicios/naves.service";
import { Nave } from "../../../clases/nave";

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {

  naves: Observable<Nave[]>;

  constructor(private naveSrv:NavesService) { }

  ngOnInit() {
    this.naveSrv.getNaves().subscribe(
      data => {        
        this.naves = data['results'];        
      });      
  }

}
