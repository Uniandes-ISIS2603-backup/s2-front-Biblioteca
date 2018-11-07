  import { Component, OnInit , Output, EventEmitter} from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { SalaService } from '../sala.service';

import { Sala } from '../sala';
@Component({
  selector: 'app-sala-create',
  templateUrl: './sala-create.component.html',
  styleUrls: ['./sala-create.component.css']
})
export class SalaCreateComponent implements OnInit {

  constructor(private salaService: SalaService,
  private toastrService: ToastrService
  ) { }
  /**
    * La nueva sala
    */
    sala: Sala;
    
   /**
    * The output which tells the parent component
    * that the user no longer wants to create a sala
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new sala
    */
    @Output() create = new EventEmitter();
        /**
    * Crear una sala
    */
    createSala(): Sala {
         console.log(this.sala)
        this.salaService.createSala(this.sala)
            .subscribe((sala) => {
                this.sala = sala;
                this.create.emit();
                this.toastrService.success("La sala fue creada", "Creación de saña");
                
            });
            return this.sala;
        
    }
  /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create a sala
    */
    cancelCreation(): void {
        this.cancel.emit();
    }
    /**
    * This function will initialize the component
    */
    ngOnInit() 
    {
           this.sala = new Sala();
    } 

}
