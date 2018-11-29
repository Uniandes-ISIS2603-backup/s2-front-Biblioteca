import { Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {Prestamo} from '../prestamo';
import {PrestamoService} from '../prestamo.service';
import { PrestamoDetail } from '../prestamo-detail';

/**
 * La lista de los prestamos
 */
@Component({
  selector: 'app-prestamo-list',
  templateUrl: './prestamo-list.component.html',
  styleUrls: ['./prestamo-list.component.css']
})
export class PrestamoListComponent implements OnInit {

  /**
    * Constructor para el componente
    * @param prestamoService Los servicios del proveedor del prestamo
    */
  constructor(
        private prestamoService: PrestamoService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
  ) 
  { }

  /**
     * La lista de prestamo del sistema de bibliotecas
     */
    prestamos: Prestamo[];
    
     /**
    * Muestra o oculta el prestamo-create-component
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
     * El prestamo que el usuario ve.
     */
    selectedPrestamo : Prestamo;
    
    /**
    * El id del prestamo que el usuario quiere ver
    */
    prestamo_id: number;
    
    /**
    * Muestra el prestamo
    */
    onSelected(prestamo_id: number):void {
        this.showCreate = false;
        this.showEdit = false;
        this.showView = true;
        this.prestamo_id = prestamo_id;
        this.selectedPrestamo = new PrestamoDetail();
        this.getPrestamoDetail();
    }
    
    getPrestamoDetail(): void {
        this.prestamoService.getPrestamoDetail(this.prestamo_id)
            .subscribe(selectedPrestamo => {
                this.selectedPrestamo = selectedPrestamo
            });
    }
    /**
     * Pregunta el servicio para actualizar la lista de prestamos
     */
    getPrestamos(): void {
        this.prestamoService.getPrestamos().subscribe(prestamos => this.prestamos = prestamos);
    }

     /**
    * Muestra o oculta el componente crear
    */
    showHideCreate(): void {
        this.showView = false;
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }
    updatePrestamo(): void{
        this.showEdit = false;
        this.showView = true;
        this.getPrestamos();
    }
    
    /**
    * Shows or hides the create component
    */
    showHideEdit(prestamo_id: number): void {
        if (!this.showEdit || (this.showEdit && prestamo_id != this.selectedPrestamo.id)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.prestamo_id = prestamo_id;
            this.selectedPrestamo = new PrestamoDetail();
            this.getPrestamoDetail();
        }
        else { 
            this.showEdit = false;
            this.showView = true;
        }
    }
  ngOnInit() 
      {
        this.showView = false;
        this.showEdit = false;
        this.selectedPrestamo = undefined;
        this.prestamo_id = undefined;
        this.showCreate = false;
        this.getPrestamos();
      }

}
