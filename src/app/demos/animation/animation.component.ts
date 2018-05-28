import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalService } from 'nzbs-modal';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss']
})
export class AnimationComponent implements OnInit {
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
    this.modalService.show(this.modal, {animate: this.fc.value});
  }
}
