import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateriskmatrixComponent } from './createriskmatrix.component';

describe('CreateriskmatrixComponent', () => {
  let component: CreateriskmatrixComponent;
  let fixture: ComponentFixture<CreateriskmatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateriskmatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateriskmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
