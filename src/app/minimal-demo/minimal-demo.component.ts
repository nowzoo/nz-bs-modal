import { Component, TemplateRef, ViewChild } from '@angular/core';
import { ModalService } from '../../../projects/modal/src/public_api';

@Component({
  selector: 'app-minimal-demo',
  templateUrl: './minimal-demo.component.html',
  styleUrls: ['./minimal-demo.component.scss']
})
export class MinimalDemoComponent {
  @ViewChild('modal') modal: TemplateRef<any>;
  constructor(
    private modalService: ModalService
  ) { }

  showModal() {
    this.modalService.show(this.modal);
  }
}
