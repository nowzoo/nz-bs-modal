import {
  Component, OnInit, Input, ViewChild,
  ElementRef, TemplateRef, EmbeddedViewRef, ViewContainerRef, EventEmitter } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { IModalInstance, IModalComponent, IModalOptions } from './interfaces';
import { ModalService } from './modal.service';

declare const jQuery: any;

@Component({
  selector: 'nz-bs-modal',
  template: `
  <div
    #modal
    class="modal"
    tabindex="-1"
    role="dialog"
    [class.fade]="options.animate !== false"
    [attr.aria-labelledby]="labelledById"
    aria-hidden="true">
    <div
      class="modal-dialog"
      [class.modal-lg]="'lg'===options.size"
      [class.modal-sm]="'sm'===options.size"
      [class.modal-dialog-centered]="options.centered"
      role="document">
      <ng-container #modalContainer></ng-container>
    </div>
  </div>
  `,
  styles: []
})
export class ModalComponent implements OnInit {

  @Input() defaultOptions: IModalOptions;
  @ViewChild('modal', {read: ElementRef}) modal: ElementRef;
  @ViewChild('modalContainer', {read: ViewContainerRef}) modalContainer: ViewContainerRef;

  labelledById: string;
  options: IModalOptions;
  events: EventEmitter<Event>;


  constructor(
    private modalSvc: ModalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.labelledById = this.modalSvc.getLabelledById();
    this.setOptions();
    this.modalSvc.setComponent(this);
  }

  setOptions(opts?: IModalOptions) {
    const baseOptions: IModalOptions = {
      animate: true,
      size: null,
      centered: false,
      backdrop: true,
      keyboard: true,
      focus: true,
      dismissOnRouteChange: true
    };
    const passedOptions = this.defaultOptions || {};
    this.options = Object.assign({}, baseOptions, passedOptions);
    if (opts) {
      this.options = Object.assign({}, this.options, opts);
    }
  }


  show(templateRef: TemplateRef<any>, options?: IModalOptions): IModalInstance {
    this.setOptions(options);
    const $el = jQuery(this.modal.nativeElement);
    const viewRef: EmbeddedViewRef<any> = templateRef.createEmbeddedView(null);
    this.modalContainer.insert(viewRef, 0);
    this.events = new EventEmitter();
    $el.one('show.bs.modal', this.emitEvent.bind(this));
    $el.one('shown.bs.modal', this.emitEvent.bind(this));
    $el.one('hide.bs.modal', this.emitEvent.bind(this));
    $el.one('hidden.bs.modal', this.emitEvent.bind(this));

    const shown = (): Promise<any> => {
      return new Promise(resolve => {
        const sub = this.events.pipe(filter(e => 'shown' === e.type))
          .subscribe(() => {
            sub.unsubscribe();
            resolve();
          });
      });
    };

    const hidden = (): Promise<any> => {
      return new Promise(resolve => {
        const sub = this.events.pipe(filter(e => 'hidden' === e.type))
          .subscribe(() => {
            sub.unsubscribe();
            resolve();
          });
      });
    };
    const instance: IModalInstance = {
      events: this.events,
      hide: () => $el.modal('hide'),
      handleUpdate: () => $el.modal('handleUpdate'),
      shown: shown,
      hidden: hidden
    };

    const routerSub: Subscription = this.router.events
      .pipe(filter(e => e instanceof ActivationEnd))
      .subscribe(() => {
        if (this.options.dismissOnRouteChange) {
          instance.hide();
        }
      });
    instance.hidden().then(() => {
      this.modalContainer.clear();
      routerSub.unsubscribe();
      $el.modal('dispose');
    });

    const bsOptions: any = {
      show: true,
      backdrop: this.options.backdrop,
      keyboard: this.options.keyboard,
      focus: this.options.focus
    };
    setTimeout(() => {
      $el.modal(bsOptions);
    });
    return instance;
  }

  emitEvent(e: Event) {
    this.events.emit(e);
  }

}
