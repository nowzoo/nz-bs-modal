import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleUpdateComponent } from './handle-update.component';

describe('HandleUpdateComponent', () => {
  let component: HandleUpdateComponent;
  let fixture: ComponentFixture<HandleUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
