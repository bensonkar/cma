import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecontrolComponent } from './createcontrol.component';

describe('CreatecontrolComponent', () => {
  let component: CreatecontrolComponent;
  let fixture: ComponentFixture<CreatecontrolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecontrolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
