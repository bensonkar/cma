import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovecontrolComponent } from './approve-control.component';

describe('ApprovecontrolComponent', () => {
  let component: ApprovecontrolComponent;
  let fixture: ComponentFixture<ApprovecontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovecontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovecontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
