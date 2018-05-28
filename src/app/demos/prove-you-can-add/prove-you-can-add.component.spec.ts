import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveYouCanAddComponent } from './prove-you-can-add.component';

describe('ProveYouCanAddComponent', () => {
  let component: ProveYouCanAddComponent;
  let fixture: ComponentFixture<ProveYouCanAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveYouCanAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveYouCanAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
