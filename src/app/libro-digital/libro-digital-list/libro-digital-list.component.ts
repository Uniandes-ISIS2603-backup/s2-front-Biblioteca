import { Component, OnInit , ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
import { LibroDigital } from '../../libro-digital/libro-digital';
import { LibroDigitalDetail } from '../libro-digital-detail';
import { LibroDigitalService } from '../../libro-digital/libro-digital.service';

@Component({
  selector: 'app-libro-digital-list',
  templateUrl: './libro-digital-list.component.html',
  styleUrls: ['./libro-digital-list.component.css']
})
export class LibroDigitalListComponent implements OnInit {

  librosDigitales: LibroDigital[];
  showCreate: boolean;
  selectedLibroDigital: LibroDigital;
  libroDigital_id: number;

  constructor(private libroDigitalService: LibroDigitalService,
            private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }

  onSelected(libroDigital_id: number): void {
    this.showCreate = false;
    this.selectedLibroDigital = new LibroDigitalDetail();
  }

  showHideCreate(): void {
    this.showCreate = !this.showCreate;
  }

  getLibrosDigitales(): void {
    this.libroDigitalService.getLibrosDigitales().subscribe(librosDigitales => {this.librosDigitales = librosDigitales});
  }

  ngOnInit() {
    this.getLibrosDigitales();
  }
 /**
    * Deletes a libroDigital
    */
    deleteLibroDigital(libroDigitalId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete a libroDigital',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this libroDigital?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.libroDigitalService.deleteLibroDigital(libroDigitalId).subscribe(() => {
                            this.toastrService.error("The libroDigital was successfully deleted", "LibroDigital deleted");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }
}
