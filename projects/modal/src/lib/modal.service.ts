import { Injectable, TemplateRef, EventEmitter } from '@angular/core';

import { IModalInstance, IModalComponent, IModalOptions } from './interfaces';


@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private component: IModalComponent;

  constructor() { }

  setComponent(component: IModalComponent) {
    this.component = component;
  }
  show(templateRef: TemplateRef<any>, options?: IModalOptions): IModalInstance {
    return this.component.show(templateRef, options);
  }
  getLabelledById() {
    return 'bootstrap-modal-label';
  }
}
