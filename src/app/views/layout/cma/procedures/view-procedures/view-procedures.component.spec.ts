import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproceduresComponent } from './view-procedures.component';

describe('ViewproceduresComponent', () => {
  let component: ViewproceduresComponent;
  let fixture: ComponentFixture<ViewproceduresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewproceduresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
