import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalService } from 'nzbs-modal';
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @ViewChild('modal') modal: TemplateRef<any>;
  formId = 'app-animation';
  modalLabelledById: string;
  fc: FormControl;
  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalLabelledById = this.modalService.getLabelledById();
    this.fc = new FormControl(true);
  }
  showModal() {
    this.modalService.show(this.modal, {keyboard: this.fc.value});
  }


}
