import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalService } from 'nzbs-modal';

@Component({
  selector: 'app-centered',
  templateUrl: './centered.component.html',
  styleUrls: ['./centered.component.scss']
})
export class CenteredComponent implements OnInit {

  @ViewChild('modal') modal: TemplateRef<any>;
  formId = 'app-centered';
  modalLabelledById: string;
  fc: FormControl;
  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalLabelledById = this.modalService.getLabelledById();
    this.fc = new FormControl(false);
  }
  showModal() {
    this.modalService.show(this.modal, {centered: this.fc.value});
  }

}
