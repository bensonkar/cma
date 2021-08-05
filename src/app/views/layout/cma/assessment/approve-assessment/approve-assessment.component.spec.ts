import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveassessmentComponent } from './approve-assessment.component';

describe('ApproveassessmentComponent', () => {
  let component: ApproveassessmentComponent;
  let fixture: ComponentFixture<ApproveassessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveassessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveassessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
