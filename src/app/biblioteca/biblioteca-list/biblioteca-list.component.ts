import { Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import {Biblioteca} from '../biblioteca';
import {BibliotecaService} from '../biblioteca.service';
import { BibliotecaDetail } from '../biblioteca-detail';

/**
 * La lista de las bibliotecas
 */
@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca-list.component.html',
  styleUrls: ['./biblioteca-list.component.css']
})
export class BibliotecaListComponent implements OnInit {

   /**
    * Constructor para el componente
    * @param bibliotecaService Los servicios del proveedor de la bibliotca
    */
  constructor(private bibliotecaService: BibliotecaService,
              private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) 
  {   }

    /**
     * La lista de bibliotecas del sistema de bibliotecas
     */
    bibliotecas: Biblioteca[];
    
     /**
    * Muestra o oculta el biblioteca-create-component
    */
    showCreate: boolean;
   
     /**
    * Muestra o oculta la edición de una biblioteca
    */
    showEdit: boolean;
    
    /**
     * Muestra o oculta el detalle de una biblioteca
     */
    showView: boolean;
        /**
     * Muestra o oculta la opcion de eliminar una biblioteca
     */
    showDelete: boolean;
    
     /**
     * la biblioteca que el usuario ve
     */
    selectedBiblioteca : Biblioteca;
    
    /**
    * El id de la biblioteca que el usuario quiere ver
    */
    biblioteca_id: number;
    
    /**
    * Shows the biblioteca
    */
    onSelected(biblioteca_id: number):void {
        this.showCreate = false;
        this.showEdit = false;
        this.showView = true;
        this.biblioteca_id = biblioteca_id;
        this.selectedBiblioteca = new BibliotecaDetail();
        this.getBibliotecaDetail();
        
    }
    
    getBibliotecaDetail(): void {
        this.bibliotecaService.getBibliotecaDetail(this.biblioteca_id)
            .subscribe(selectedBiblioteca => {
                this.selectedBiblioteca = selectedBiblioteca
            });
    }
    
    /**
     * Pregunta el servicio para actualizar la lista de bibliotecas
     */
    getBibliotecas(): void {
        this.bibliotecaService.getBibliotecas().subscribe(bibliotecas => this.bibliotecas = bibliotecas);
    }

     /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showView = false;
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }
    
    updateBiblioteca(): void{
        this.showEdit = false;
        this.showView = true;
        this.getBibliotecas();
    }
    
    /**
    * Shows or hides the create component
    */
    showHideEdit(biblioteca_id: number): void {
        if (!this.showEdit || (this.showEdit && biblioteca_id != this.selectedBiblioteca.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.biblioteca_id = biblioteca_id;
            this.selectedBiblioteca = new BibliotecaDetail();
            this.getBibliotecaDetail();
        }
        else { 
            this.showEdit = false;
            this.showView = true;
        }
    }
     /**
    * Deletes a biblioteca
    */
    deleteBiblioteca(bibliotecaId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete a biblioteca',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this biblioteca?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.bibliotecaService.deleteBiblioteca(bibliotecaId).subscribe(() => {
                            this.toastrService.error("The biblioteca was successfully deleted", "Biblioteca deleted");
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
       
        this.showView = false;
        this.showEdit = false;
        this.selectedBiblioteca = undefined;
        this.biblioteca_id = undefined;
        this.showCreate = false;
        this.getBibliotecas();
      }

}
