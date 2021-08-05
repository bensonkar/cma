import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListimpactsComponent } from './listimpacts.component';

describe('ListimpactsComponent', () => {
  let component: ListimpactsComponent;
  let fixture: ComponentFixture<ListimpactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListimpactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListimpactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
