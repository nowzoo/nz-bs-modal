import { TestBed, inject } from '@angular/core/testing';

import { NzBsModalService } from './nz-bs-modal.service';

describe('NzBsModalService', () => {
  let service;
  let component: any;
  beforeEach(() => {
    component = {show: jasmine.createSpy()};
    TestBed.configureTestingModule({
      providers: [NzBsModalService]
    });
    service = TestBed.get(NzBsModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setComponent(component: IModalComponent)', () => {
    it('should set the component', () => {
      service.setComponent(component);
    });
  });
  describe('getLabelledById()', () => {
    it('should be a string', () => {
      expect(service.getLabelledById()).toEqual(jasmine.any(String));
    });
  });
  describe('show(template, options)', () => {
    let template: any;
    let options: any;
    beforeEach(() => {
      service.component = component;
      template = {};
      options = {};
    });
    it('should call component.show if passed a template', () => {
      service.show(template);
      expect(component.show).toHaveBeenCalledWith(template, undefined);
    });
    it('should call component.show if passed options', () => {
      service.show(template, options);
      expect(component.show).toHaveBeenCalledWith(template, options);
    });
  });
});
