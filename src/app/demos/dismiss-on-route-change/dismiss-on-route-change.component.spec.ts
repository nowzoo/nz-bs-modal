import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DismissOnRouteChangeComponent } from './dismiss-on-route-change.component';

describe('DismissOnRouteChangeComponent', () => {
  let component: DismissOnRouteChangeComponent;
  let fixture: ComponentFixture<DismissOnRouteChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DismissOnRouteChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DismissOnRouteChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
