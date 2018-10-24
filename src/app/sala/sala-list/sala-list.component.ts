import { Component, OnInit } from '@angular/core';
import{Sala} from '../sala';
import {SalaService} from '../sala.service';


@Component({
  selector: 'app-sala-list',
  templateUrl: './sala-list.component.html',
  styleUrls: ['./sala-list.component.css']
})
export class SalaListComponent implements OnInit {

  constructor(private salaService:SalaService) { }
  salas: Sala[];
  getSalas():void{
      this.salaService.getSalas().subscribe(salas=> this.salas = salas);
  }
  ngOnInit() {
      this.getSalas();
  }

}
