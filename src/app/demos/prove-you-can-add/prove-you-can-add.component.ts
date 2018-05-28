import { Component, OnInit, TemplateRef, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NzBsModalService, INzBsModalInstance } from 'nzbs-modal';
@Component({
  selector: 'app-prove-you-can-add',
  templateUrl: './prove-you-can-add.component.html',
  styleUrls: ['./prove-you-can-add.component.scss']
})
export class ProveYouCanAddComponent implements OnInit {
  @ViewChild('inputToFocus') inputToFocus: ElementRef;
  @ViewChild('modal') modal: TemplateRef<any>;
  formId = 'app-size';
  modalLabelledById: string;
  fg: FormGroup;
  modalInstance: INzBsModalInstance;
  result: 'success' | 'canceled' = null;
  error = false;
  constructor(private modalService: NzBsModalService, private fb: FormBuilder) { }

  ngOnInit() {
    this.modalLabelledById = this.modalService.getLabelledById();
    this.fg = this.fb.group({
      answer: [22]
    });
    this.fg.valueChanges.subscribe(() => this.error = false);
  }
  showModal() {
    this.result = null;
    this.error = false;
    this.modalInstance = this.modalService.show(this.modal);
    // When the modal is completely shown, focus the input....
    this.modalInstance.shown()
      .then(() => {
        this.inputToFocus.nativeElement.focus();
      });
    // When the modal has been hidden, check to see whether the
    // form has set result to 'success'. See submit(), below.
    // If not, set result to 'canceled'...
    this.modalInstance.hidden()
      .then(() => {
        if (this.result !== 'success') {
          this.result = 'canceled';
        }
      });
  }
  submit() {
    this.error = this.fg.get('answer').value !== 4;
    if (! this.error) {
      this.result = 'success';
      this.modalInstance.hide();
    }
  }

}
