import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelicensesComponent } from './createlicenses.component';

describe('CreatelicensesComponent', () => {
  let component: CreatelicensesComponent;
  let fixture: ComponentFixture<CreatelicensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatelicensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatelicensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
