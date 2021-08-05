import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveordersComponent } from './approve-orders.component';

describe('ApproveordersComponent', () => {
  let component: ApproveordersComponent;
  let fixture: ComponentFixture<ApproveordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
