import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewriskmatrixComponent } from './view-riskmatrix.component';

describe('ViewriskmatrixComponent', () => {
  let component: ViewriskmatrixComponent;
  let fixture: ComponentFixture<ViewriskmatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewriskmatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewriskmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
