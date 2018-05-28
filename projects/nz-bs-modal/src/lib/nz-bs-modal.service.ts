import { Injectable, TemplateRef, EventEmitter } from '@angular/core';

import { INzBsModalInstance, INzBsModalComponent, INzBsModalOptions } from './nz-bs-interfaces';


@Injectable({
  providedIn: 'root'
})
export class NzBsModalService {

  private component: INzBsModalComponent;

  constructor() { }

  setComponent(component: INzBsModalComponent) {
    this.component = component;
  }
  show(templateRef: TemplateRef<any>, options?: INzBsModalOptions): INzBsModalInstance {
    return this.component.show(templateRef, options);
  }
  getLabelledById() {
    return 'bootstrap-modal-label';
  }
}
