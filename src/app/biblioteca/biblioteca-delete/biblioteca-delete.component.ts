import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import {BibliotecaDetail} from '../biblioteca-detail';
import {ToastrService} from 'ngx-toastr';
import {BibliotecaService} from '../biblioteca.service';
@Component({
  selector: 'app-biblioteca-delete',
  templateUrl: './biblioteca-delete.component.html',
  styleUrls: ['./biblioteca-delete.component.css']
})
export class BibliotecaDeleteComponent implements OnInit {

  constructor(
    private bibliotecaService: BibliotecaService,
        
        private toastrService: ToastrService,) { }
             /**
    * 
    * El id de la biblioteca que se recibió del componente padre
    */
    @Input() biblioteca: BibliotecaDetail;
    
     /**
    * El output que le dice al componente principal
    * que el usuario ya no quiere borrar una biblioteca.
    */
    @Output() cancel = new EventEmitter();
    
    /**
    * El output que le dice al componente principal
    * que el usuario quiere borrar una biblioteca
    */
    @Output() delete = new EventEmitter();


    deleteBiblioteca(): void {
        this.bibliotecaService.deleteBiblioteca(this.biblioteca)
            .subscribe(() => {
                this.delete.emit();
                this.toastrService.success("La biblioteca fue eliminada", "Biblioteca delete");
            });
    }
        /**
    * Emite la señal para decirle al componente principal que el 
    * usuario ya no quiere borrar una biblioteca
    */
    cancelDelete(): void {
        this.cancel.emit();
    }
  ngOnInit() {
  }

}
