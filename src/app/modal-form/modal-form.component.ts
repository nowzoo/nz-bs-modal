import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModalService, IModalOptions } from 'nzbs-modal';
@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {
  @ViewChild('modal') modal: TemplateRef<any>;
  id = 'app-modal-form';
  fg: FormGroup;
  options: IModalOptions;
  constructor(
    private fb: FormBuilder,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.fg = this.fb.group({
      animate: [true],
      size: [null],
      centered: [false],
      backdrop: [true],
      keyboard: [true],
      focus: [true],
      dismissOnRouteChange: [false]
    });
    this.fg.valueChanges.subscribe(val => this.options = val);
    this.options = this.fg.value;
  }
  openModal() {
    this.modalService.show(this.modal, this.options);
  }

}
