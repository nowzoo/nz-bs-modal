import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModalService, IModalInstance } from '../../../projects/modal/src/public_api';
@Component({
  selector: 'app-form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss']
})
export class FormDemoComponent implements OnInit {
  @ViewChild('modal') modal: TemplateRef<any>;
  formId = 'app-form-demo';
  modalLabelledById: string;
  fg: FormGroup;
  error: string = null;
  success: string = null;
  modalInstance: IModalInstance;
  constructor(
    private fb: FormBuilder,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.modalLabelledById = this.modalService.getLabelledById();
    this.fg = this.fb.group({
      answer: [22]
    });
  }
  showModal() {
    this.success = null;
    this.modalInstance = this.modalService.show(this.modal, {});
  }
  submit() {
    const valid = this.fg.get('answer').value === 4;
    this.error = valid ? null : 'Nope.';
    this.success = valid ? 'Good for you.' : null;
    if (valid) {
      this.modalInstance.hide();
    }
  }


}
