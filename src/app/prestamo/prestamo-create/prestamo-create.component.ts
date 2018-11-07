import { Component, OnInit , Output, EventEmitter} from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { PrestamoService } from '../prestamo.service';

import { Prestamo } from '../prestamo';

@Component({
  selector: 'app-prestamo-create',
  templateUrl: './prestamo-create.component.html',
  styleUrls: ['./prestamo-create.component.css']
})
export class PrestamoCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param prestamoService The prestamo's services provider
    * @param toastrService The toastr to show messages to the user
    */  
  constructor(
  private prestamoService: PrestamoService,
  private toastrService: ToastrService
        ) { }

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
    } 

}
