import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavesService } from "../../../servicios/naves.service";
import { Nave } from "../../../clases/nave";

@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent implements OnInit {

  id:any;
  nave: Nave;

  constructor(private activatedRoute: ActivatedRoute,private naveSrv:NavesService) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.naveSrv.getNave(this.id).subscribe(data => {
      console.log(data);
      this.nave = data;
    });
  }

}
