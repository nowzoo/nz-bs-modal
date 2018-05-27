import { TemplateRef, EventEmitter } from '@angular/core';

export interface IModalComponent {
  show: (templateRef:  TemplateRef<any>, options?: IModalOptions) => IModalInstance;
}

export interface IModalInstance {
  events: EventEmitter<Event>;
  hide: () => void;
  handleUpdate: () => void;
  shown: () => Promise<void>;
  hidden: () => Promise<void>;
}

export interface IModalOptions {
  animate?: boolean;
  size?: 'sm' | 'lg' | null;
  centered?: boolean;
  backdrop?: true | false | 'static';
  keyboard?: boolean;
  focus?: boolean;
  dismissOnRouteChange?: boolean;
}
