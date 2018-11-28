import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import { PrestamoService } from '../prestamo.service';
import { UsuarioService} from '../../usuario/usuario.service';
import {Usuario} from '../../usuario/usuario';
import { Prestamo } from '../prestamo';

@Component({
  selector: 'app-prestamo-create',
  templateUrl: './prestamo-create.component.html',
  styleUrls: ['./prestamo-create.component.css'],
  providers: [DatePipe]
})
export class PrestamoCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param prestamoService The prestamo's services provider
    * @param toastrService The toastr to show messages to the user
    */  
  constructor(
  private dp: DatePipe,
  private dp2: DatePipe,
  private prestamoService: PrestamoService,
  private toastrService: ToastrService,
  private usuarioService: UsuarioService,
        ) { }

        
    /**
    * La lista de todos los usuarios
    */
    usuarios: Usuario[];
   
     /**
    * El nuevo prestamo
    */
    prestamo: Prestamo;
    
    
    /**
    * Retrieves the list of editorials in the BookStore
    */
    getUsuarios(): void {
        this.usuarioService.getUsuarios()
            .subscribe(usuarios => {
                this.usuarios = usuarios;
            }, err => {
                this.toastrService.error(err, 'Error');
            });
    }
    
   /**
    * The output which tells the parent component
    * that the user no longer wants to create an prestamo
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new prestamo
    */
    @Output() create = new EventEmitter();
    
    /**
    * Crear un prestamo
    */
    createPrestamo(): Prestamo {
        let dateB: Date = new Date(this.prestamo.fechaDeSalida.year, this.prestamo.fechaDeSalida.month - 1, this.prestamo.fechaDeSalida.day);
        this.prestamo.fechaDeSalida = this.dp.transform(dateB, 'yyyy-MM-dd');
        let dateB2: Date = dateB;
        dateB2.setMonth(dateB.getMonth()+ 1);
        this.prestamo.fechaDeEntrega = this.dp.transform(dateB2, 'yyyy-MM-dd');
            console.log(this.prestamo)
        this.prestamoService.createPrestamo(this.prestamo)
            .subscribe((prestamo) => {
                this.prestamo = prestamo;
                this.create.emit();
                this.toastrService.success("El prestamo fue creado", "Creación de prestamo");
                
            });
            return this.prestamo;
        
    }
 
    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }
    /**
    * This function will initialize the component
    */
    ngOnInit() 
    {
           this.prestamo = new Prestamo();
        this.prestamo.usuario = new Usuario();
        this.getUsuarios();
    } 

}
