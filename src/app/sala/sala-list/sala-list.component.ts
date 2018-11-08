import { Component, OnInit } from '@angular/core';
import{Sala} from '../sala';
import {SalaService} from '../sala.service';
import { SalaDetail } from '../sala-detail';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sala',
  templateUrl: './sala-list.component.html',
  styleUrls: ['./sala-list.component.css']
})
export class SalaListComponent implements OnInit {

  constructor(private salaService:SalaService) { }
     /**
     * La lista de salas
     */
    salas: Sala[];
    
     /**
    * Muestra o oculta el sala-create-component
    */
    showCreate: boolean;
   
     /**
     * la sala que el usuario ve
     */
    selectedSala : Sala;
    
    /**
    * El id de la sala que el usuario quiere ver
    */
    sala_id: number;
    
    /**
    * Shows the sala
    */
    onSelected(sala_id: number):void {
        this.showCreate = false;
        this.sala_id = sala_id;
        this.selectedSala = new SalaDetail();
        
    }
    
    /**
     * Pregunta el servicio para actualizar la lista de salas
     */
    getSalas(): void {
        this.salaService.getSalas().subscribe(salas => this.salas = salas);
    }

     /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        if (this.selectedSala) {
            this.selectedSala = undefined;
            this.sala_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
  ngOnInit() 
      {
        this.getSalas();
        this.showCreate = false;
      }

}
