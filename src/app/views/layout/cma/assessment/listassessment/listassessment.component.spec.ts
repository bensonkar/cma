import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListassessmentComponent } from './listassessment.component';

describe('ListassessmentComponent', () => {
  let component: ListassessmentComponent;
  let fixture: ComponentFixture<ListassessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListassessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListassessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
