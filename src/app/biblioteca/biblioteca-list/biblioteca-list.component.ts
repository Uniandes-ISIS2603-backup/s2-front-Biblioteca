import { Component, OnInit } from '@angular/core';


import {Biblioteca} from '../biblioteca';
import {BibliotecaService} from '../biblioteca.service';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca-list.component.html',
  styleUrls: ['./biblioteca-list.component.css']
})
export class BibliotecaListComponent implements OnInit {

  constructor(private bibliotecaService: BibliotecaService) 
  {   }

    /**
     * La lista de bibliotecas del sistema de bibliotecas
     */
    bibliotecas: Biblioteca[];
    
    
    /**
     * Pregunta el servicio para actualizar la lista de bibliotecas
     */
    getBibliotecas(): void {
        this.bibliotecaService.getBibliotecas().subscribe(bibliotecas => this.bibliotecas = bibliotecas);
    }

  ngOnInit() 
      {
        this.getBibliotecas();
        
      }

}
