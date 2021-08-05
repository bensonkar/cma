import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateimpactsComponent } from './createimpacts.component';

describe('CreateimpactsComponent', () => {
  let component: CreateimpactsComponent;
  let fixture: ComponentFixture<CreateimpactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateimpactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateimpactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
