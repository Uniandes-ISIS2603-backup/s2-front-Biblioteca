import { Component, OnInit , ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
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

  constructor(private salaService:SalaService,
            private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }
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
    /**
    * Deletes a sala
    */
    deleteSala(salaId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete a sala',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this sala?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.salaService.deleteSala(salaId).subscribe(() => {
                            this.toastrService.error("The sala was successfully deleted", "Sala deleted");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }
  ngOnInit() 
      {
        this.getSalas();
        this.showCreate = false;
      }

}
