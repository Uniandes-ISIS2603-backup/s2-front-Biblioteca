import { Component, OnInit , Output, EventEmitter} from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { LibroService } from '../libro.service';

import { Libro } from '../libro';

@Component({
  selector: 'app-libro-create',
  templateUrl: './libro-create.component.html',
  styleUrls: ['./libro-create.component.css']
})
export class LibroCreateComponent implements OnInit {
    
   /**
    * Constructor for the component
    * @param libroService The libro's services provider
    * @param toastrService The toastr to show messages to the user
    */  
  constructor(
  private libroService: LibroService,
  private toastrService: ToastrService
        ) { }


  /**
    * El nuevo libro
    */
    libro: Libro;
    
   /**
    * The output which tells the parent component
    * that the user no longer wants to create an libro
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new libro
    */
    @Output() create = new EventEmitter();
    
    /**
    * Crear una libro
    */
    createLibro(): Libro {
         console.log(this.libro)
        this.libroService.createLibro(this.libro)
            .subscribe((libro) => {
                this.libro = libro;
                this.create.emit();
                this.toastrService.success("El libro fue creada", "Creación de libro");
                
            });
            return this.libro;
        
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
           this.libro = new Libro();
    } 

}
