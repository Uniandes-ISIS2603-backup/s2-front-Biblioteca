import { Component, Input,OnInit , Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import { PrestamoService } from '../../prestamo/prestamo.service';
import { UsuarioService} from '../../usuario/usuario.service';
import {Usuario} from '../../usuario/usuario';
import {LibroDetail} from '../../libro/libro-detail';
import { Prestamo } from '../../prestamo/prestamo';
@Component({
  selector: 'app-libro-prestamo',
  templateUrl: './libro-prestamo.component.html',
  styleUrls: ['./libro-prestamo.component.css'],
  providers: [DatePipe]
})
export class LibroPrestamoComponent implements OnInit {

  constructor(
  private dp: DatePipe,
  private prestamoService: PrestamoService,
  private toastrService: ToastrService,
  private usuarioService: UsuarioService,
  ) { }

    /**
     * el libro que queremos mostrar
     */
    @Input() libroDetail: LibroDetail;  
   /**
    * El nuevo prestamo
    */
    prestamo: Prestamo;
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
        
        
        var hoy = new Date();
        var mm = hoy.getMonth()+1;
        this.prestamo.fechaDeSalida = this.dp.transform(hoy, 'yyyy-MM-dd');
        hoy.setMonth(mm);
        this.prestamo.fechaDeEntrega = this.dp.transform(hoy, 'yyyy-MM-dd');
        this.prestamo.retornado = false;
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
    cancelPrestamo(): void {
        this.cancel.emit();
    }
    /**
    * This function will initialize the component
    */
    ngOnInit() 
    {
           this.prestamo = new Prestamo();
        this.prestamo.usuario = new Usuario();
        
    } 
}
