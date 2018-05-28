import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ModalService, IModalInstance } from '../../../../projects/modal/src/public_api';

@Component({
  selector: 'app-handle-update',
  templateUrl: './handle-update.component.html',
  styleUrls: ['./handle-update.component.scss']
})
export class HandleUpdateComponent implements OnInit {

  @ViewChild('modal') modal: TemplateRef<any>;
  modalLabelledById: string;
  modalInstance: IModalInstance = null;
  long = `Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit anim id est laborum.
  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco
  laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate
  velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident,
  sunt in culpa qui officia deserunt mollit anim id est laborum. `;
  short = `A short message.`;
  isShort = true;
  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.modalLabelledById = this.modalService.getLabelledById();
  }
  showModal() {
    this.modalInstance = this.modalService.show(this.modal);
  }
  toggleContent() {
    this.isShort = ! this.isShort;
    setTimeout(() => this.modalInstance.handleUpdate());
  }

}
