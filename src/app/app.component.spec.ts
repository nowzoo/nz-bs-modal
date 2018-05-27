import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'nz-bs-modal',
  template: `
  <div
    #modal
    class="modal"
    tabindex="-1"
    role="dialog"
    [class.fade]="options.animate"
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
class ModalComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, ModalComponent
      ],

    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ');
  }));
});
