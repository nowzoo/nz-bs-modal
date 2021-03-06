import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NzBsModalService } from 'nzbs-modal';

@Component({
  selector: 'app-focus',
  templateUrl: './focus.component.html',
  styleUrls: ['./focus.component.scss']
})
export class FocusComponent implements OnInit {
  @ViewChild('modal') modal: TemplateRef<any>;
  formId = 'app-focus';
  modalLabelledById: string;
  fc: FormControl;
  constructor(private modalService: NzBsModalService) { }

  ngOnInit() {
    this.modalLabelledById = this.modalService.getLabelledById();
    this.fc = new FormControl(true);
  }
  showModal() {
    this.modalService.show(this.modal, {focus: this.fc.value});
  }


}
