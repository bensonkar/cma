import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcontrolComponent } from './listcontrol.component';

describe('ListcontrolComponent', () => {
  let component: ListcontrolComponent;
  let fixture: ComponentFixture<ListcontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
