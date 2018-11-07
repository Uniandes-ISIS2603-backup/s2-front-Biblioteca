import { Component, OnInit } from '@angular/core';

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
  constructor(private prestamoService: PrestamoService) 
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
        this.prestamo_id = prestamo_id;
        this.selectedPrestamo = new PrestamoDetail();
        
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
        if (this.selectedPrestamo) {
            this.selectedPrestamo = undefined;
            this.prestamo_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
  ngOnInit() 
      {
        this.getPrestamos();
        this.showCreate = false;
      }

}
