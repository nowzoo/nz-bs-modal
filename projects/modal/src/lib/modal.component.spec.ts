import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { EventEmitter} from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';
import { Router, ActivationEnd } from '@angular/router';
import { Subject } from 'rxjs';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let modalSvc;
  let el, elementRef, $el;
  let routerEvents$: Subject<any>;

  beforeEach(() => {
    routerEvents$ = new Subject();
    el = document.createElement('div');
    elementRef = {nativeElement: el};
    $el = {
      modal: jasmine.createSpy(),
      on: jasmine.createSpy(),
      one: jasmine.createSpy()
    };
    window['jQuery'] = jasmine.createSpy().and.returnValue($el);
    modalSvc = {
      setComponent: jasmine.createSpy(),
      getLabelledById: jasmine.createSpy().and.returnValue('foo')
    };
    TestBed.configureTestingModule({
      declarations: [ ModalComponent ],
      providers: [
        {provide: ModalService, useValue: modalSvc},
        {provide: Router, useValue: {events: routerEvents$.asObservable()}}
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit()', () => {
    it('should set labelledById', () => {
      component.ngOnInit();
      expect(component.labelledById).toBe('foo');
    });
    it('should set options', () => {
      spyOn(component, 'setOptions').and.callFake(() => {});
      component.ngOnInit();
      expect(component.setOptions).toHaveBeenCalledWith();
    });
    it('should call service.setComponent', () => {
      component.ngOnInit();
      expect(modalSvc.setComponent).toHaveBeenCalledWith(component);
    });
  });

  describe('setOptions(o)', () => {
    it('should work if no options are set on the input and no options are passed', () => {
      component.setOptions();
      expect(component.options).toEqual({
        animate: true,
        size: null,
        centered: false,
        backdrop: true,
        keyboard: true,
        focus: true,
        dismissOnRouteChange: false
      });
    });
    it('should work if options are set in an input', () => {
      component.defaultOptions = {animate: false};
      component.setOptions();
      expect(component.options).toEqual({
        animate: false,
        size: null,
        centered: false,
        backdrop: true,
        keyboard: true,
        focus: true,
        dismissOnRouteChange: false
      });
    });
    it('should work if options passed', () => {
      component.setOptions({animate: false});
      expect(component.options).toEqual({
        animate: false,
        size: null,
        centered: false,
        backdrop: true,
        keyboard: true,
        focus: true,
        dismissOnRouteChange: false
      });
    });
  });

  describe('show(template, options)', () => {
    let template: any;
    let options: any;
    let modalContainer: any;
    beforeEach(() => {
      spyOn(component, 'setOptions').and.callThrough();
      modalContainer = {insert: jasmine.createSpy(), clear: jasmine.createSpy()};
      component.modalContainer = modalContainer;
      template = {createEmbeddedView: jasmine.createSpy().and.returnValue({})};
      options = {};
    });
    it('should call setOptions', () => {
      component.show(template, options);
      expect(component.setOptions).toHaveBeenCalledWith(options);
    });
    it('should call $el.modal(options) with the options', () => {
      component.show(template, options);
      expect($el.modal).toHaveBeenCalledWith({
        show: true,
        backdrop: true,
        focus: true,
        keyboard: true
      });
    });

    it('should return an object with handleUpdate() function', () => {
      const instance = component.show(template);
      instance.handleUpdate();
      expect($el.modal).toHaveBeenCalledWith('handleUpdate');
    });
    it('should return an object with hide() function', () => {
      const instance = component.show(template);
      instance.hide();
      expect($el.modal).toHaveBeenCalledWith('hide');
    });
    it('should return an object with shown() function returning a promise', fakeAsync(() => {
      const instance = component.show(template);
      let shown;
      instance.shown().then(() => shown = true);
      tick();
      expect(shown).not.toBe(true);
      component.emitEvent({type: 'shown'} as Event);
      tick();
      expect(shown).toBe(true);
    }));
    it('should return an object with hidden() function returning a promise', fakeAsync(() => {
      const instance = component.show(template);
      let shown;
      instance.hidden().then(() => shown = true);
      tick();
      expect(shown).not.toBe(true);
      component.emitEvent({type: 'hidden'} as Event);
      tick();
      expect(shown).toBe(true);
    }));
    it('should clear the view on hidden()', fakeAsync(() => {
      // const instance = component.show(template);
      // instance.hide();
      // tick();
      // expect(modalContainer.clear).toHaveBeenCalledWith();
    }));
  });
  describe('emitEvent(e)', () => {
    let event;
    let modalContainer;
    beforeEach(() => {
      modalContainer = {clear: jasmine.createSpy()};
      component.modalContainer = modalContainer;
      event = {type: 'show'};
      component.events = new EventEmitter();
      spyOn(component.events, 'emit').and.callThrough();
    });
    it('should emit the event', () => {
      component.emitEvent(event);
      expect(component.events.emit).toHaveBeenCalledWith(event);
    });

  });

});
