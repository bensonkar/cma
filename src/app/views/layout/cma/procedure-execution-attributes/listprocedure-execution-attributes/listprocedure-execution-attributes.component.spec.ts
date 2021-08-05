import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprocedureexecutionattributesComponent } from './listprocedure-execution-attributes.component';

describe('Listprocedure-execution-attributesComponent', () => {
  let component: ListprocedureexecutionattributesComponent;
  let fixture: ComponentFixture<ListprocedureexecutionattributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListprocedureexecutionattributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListprocedureexecutionattributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
