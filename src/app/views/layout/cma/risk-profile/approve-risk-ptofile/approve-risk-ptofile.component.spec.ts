import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveRiskPtofileComponent } from './approve-risk-ptofile.component';

describe('ApproveRiskPtofileComponent', () => {
  let component: ApproveRiskPtofileComponent;
  let fixture: ComponentFixture<ApproveRiskPtofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproveRiskPtofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveRiskPtofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
