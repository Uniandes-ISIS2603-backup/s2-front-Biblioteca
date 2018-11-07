import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private bibliotecaService: BibliotecaService) 
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
        this.biblioteca_id = biblioteca_id;
        this.selectedBiblioteca = new BibliotecaDetail();
        
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
        if (this.selectedBiblioteca) {
            this.selectedBiblioteca = undefined;
            this.biblioteca_id = undefined;
        }
        this.showCreate = !this.showCreate;
    }
  ngOnInit() 
      {
        this.getBibliotecas();
        this.showCreate = false;
      }

}
