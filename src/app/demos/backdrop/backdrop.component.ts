import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalService } from 'nzbs-modal';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent implements OnInit {

  @ViewChild('modal') modal: TemplateRef<any>;
  formId = 'app-backdrop';
  modalLabelledById: string;
  fc: FormControl;
  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalLabelledById = this.modalService.getLabelledById();
    this.fc = new FormControl(true);
  }
  showModal() {
    this.modalService.show(this.modal, {backdrop: this.fc.value});
  }

}
