import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { excuteproceduresComponent } from './excuteprocedures.component';

describe('excuteproceduresComponent', () => {
  let component: excuteproceduresComponent;
  let fixture: ComponentFixture<excuteproceduresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ excuteproceduresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(excuteproceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
