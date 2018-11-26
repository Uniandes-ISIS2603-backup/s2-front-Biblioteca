import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BibliotecaService } from '../biblioteca.service';
import { Biblioteca } from '../biblioteca';

@Component({
  selector: 'app-biblioteca-create',
  templateUrl: './biblioteca-create.component.html',
  styleUrls: ['./biblioteca-create.component.css']
})
export class BibliotecaCreateComponent implements OnInit {
    
   /**
    * Constructor for the component
    * @param bibliotecaService The biblioteca's services provider
    * @param toastrService The toastr to show messages to the user
    */  
  constructor(
  private bibliotecaService: BibliotecaService,
  private toastrService: ToastrService
        ) { }


  /**
    * La nueva biblioteca
    */
    biblioteca: Biblioteca;
    
   /**
    * The output which tells the parent component
    * that the user no longer wants to create an biblioteca
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new biblioteca
    */
    @Output() create = new EventEmitter();
    
    /**
    * Crear una biblioteca
    */
    createBiblioteca(): Biblioteca {
         console.log(this.biblioteca)
        this.bibliotecaService.createBiblioteca(this.biblioteca)
            .subscribe((biblioteca) => {
                this.biblioteca = biblioteca;
                this.create.emit();
                this.toastrService.success("La biblioteca fue creada", "Creación de biblioteca");
                
            });
            return this.biblioteca;
        
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
           this.biblioteca = new Biblioteca();
    } 

}
