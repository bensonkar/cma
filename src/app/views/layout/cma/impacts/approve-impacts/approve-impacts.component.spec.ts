import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveimpactsComponent } from './approve-impacts.component';

describe('ApproveimpactsComponent', () => {
  let component: ApproveimpactsComponent;
  let fixture: ComponentFixture<ApproveimpactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveimpactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveimpactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
