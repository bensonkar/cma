import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListproceduresComponent } from './listprocedures.component';

describe('ListproceduresComponent', () => {
  let component: ListproceduresComponent;
  let fixture: ComponentFixture<ListproceduresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListproceduresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListproceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
