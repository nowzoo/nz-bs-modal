import { TemplateRef, EventEmitter } from '@angular/core';

export interface INzBsModalComponent {
  show: (templateRef:  TemplateRef<any>, options?: INzBsModalOptions) => INzBsModalInstance;
}

export interface INzBsModalInstance {
  events: EventEmitter<Event>;
  hide: () => void;
  handleUpdate: () => void;
  shown: () => Promise<void>;
  hidden: () => Promise<void>;
}

export interface INzBsModalOptions {
  animate?: boolean;
  size?: 'sm' | 'lg' | null;
  centered?: boolean;
  backdrop?: true | false | 'static';
  keyboard?: boolean;
  focus?: boolean;
  dismissOnRouteChange?: boolean;
}
