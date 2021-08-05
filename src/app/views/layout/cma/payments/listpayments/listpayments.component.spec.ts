import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlicensesComponent } from './listlicenses.component';

describe('ListlicensesComponent', () => {
  let component: ListlicensesComponent;
  let fixture: ComponentFixture<ListlicensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListlicensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlicensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
