import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveLicensesComponent } from './approve-licenses.component';

describe('ApproveLicensesComponent', () => {
  let component: ApproveLicensesComponent;
  let fixture: ComponentFixture<ApproveLicensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveLicensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveLicensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
