import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NzBsModalService } from 'nzbs-modal';
@Component({
  selector: 'app-dismiss-on-route-change',
  templateUrl: './dismiss-on-route-change.component.html',
  styleUrls: ['./dismiss-on-route-change.component.scss']
})
export class DismissOnRouteChangeComponent implements OnInit {

  @ViewChild('modal') modal: TemplateRef<any>;
  formId = 'app-dismiss-on-route-change';
  modalLabelledById: string;
  fc: FormControl;
  constructor(private modalService: NzBsModalService) { }

  ngOnInit() {
    this.modalLabelledById = this.modalService.getLabelledById();
    this.fc = new FormControl(true);
  }
  showModal() {
    this.modalService.show(this.modal, {dismissOnRouteChange: this.fc.value});
  }

}
