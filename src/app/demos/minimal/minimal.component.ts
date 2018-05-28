import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from 'nzbs-modal';
@Component({
  selector: 'app-minimal',
  templateUrl: './minimal.component.html',
  styleUrls: ['./minimal.component.scss']
})
export class MinimalComponent {

  @ViewChild('modal') modal: TemplateRef<any>;
  constructor(
    private modalService: ModalService
  ) { }

  showModal() {
    this.modalService.show(this.modal);
  }

}
