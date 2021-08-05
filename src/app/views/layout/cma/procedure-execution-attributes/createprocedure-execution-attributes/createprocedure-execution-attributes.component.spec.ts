import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateproceduresComponent } from './createprocedures.component';

describe('CreateproceduresComponent', () => {
  let component: CreateproceduresComponent;
  let fixture: ComponentFixture<CreateproceduresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateproceduresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateproceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
