import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovepaymentsComponent } from './approve-payments.component';

describe('ApprovepaymentsComponent', () => {
  let component: ApprovepaymentsComponent;
  let fixture: ComponentFixture<ApprovepaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovepaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovepaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
