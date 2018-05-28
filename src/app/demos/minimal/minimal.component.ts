import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NzBsModalService } from 'nzbs-modal';
@Component({
  selector: 'app-minimal',
  templateUrl: './minimal.component.html',
  styleUrls: ['./minimal.component.scss']
})
export class MinimalComponent {

  @ViewChild('modal') modal: TemplateRef<any>;
  constructor(
    private modalService: NzBsModalService
  ) { }

  showModal() {
    this.modalService.show(this.modal);
  }
}
