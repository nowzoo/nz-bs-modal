import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NzBsModalService, IModalInstance } from 'nzbs-modal';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  @ViewChild('modal') modal: TemplateRef<any>;
  modalLabelledById: string;
  events: any[] = [];
  modalInstance: IModalInstance = null;
  constructor(
    private modalService: NzBsModalService
  ) { }

  ngOnInit() {
    this.modalLabelledById = this.modalService.getLabelledById();
  }
  showModal() {
    this.events = [];
    this.modalInstance = this.modalService.show(this.modal);
    this.modalInstance.events.subscribe(val => {
      this.events.push(val.type);
    });
  }

}
