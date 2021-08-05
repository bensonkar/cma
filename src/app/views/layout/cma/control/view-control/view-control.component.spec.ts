import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcontrolComponent } from './view-control.component';

describe('ViewcontrolComponent', () => {
  let component: ViewcontrolComponent;
  let fixture: ComponentFixture<ViewcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
