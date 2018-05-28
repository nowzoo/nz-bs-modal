import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NzBsModalService } from 'nzbs-modal';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {

  @ViewChild('modal') modal: TemplateRef<any>;
  formId = 'app-size';
  modalLabelledById: string;
  fc: FormControl;
  constructor(private modalService: NzBsModalService) { }

  ngOnInit() {
    this.modalLabelledById = this.modalService.getLabelledById();
    this.fc = new FormControl(null);
  }
  showModal() {
    this.modalService.show(this.modal, {size: this.fc.value});
  }

}
