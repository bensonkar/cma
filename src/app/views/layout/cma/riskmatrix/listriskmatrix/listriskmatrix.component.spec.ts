import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListriskmatrixComponent } from './listriskmatrix.component';

describe('ListriskmatrixComponent', () => {
  let component: ListriskmatrixComponent;
  let fixture: ComponentFixture<ListriskmatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListriskmatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListriskmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
