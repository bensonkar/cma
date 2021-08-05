import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateoveralriskdescriptionComponent } from './createoveralriskdescription.component';

describe('CreateoveralriskdescriptionComponent', () => {
  let component: CreateoveralriskdescriptionComponent;
  let fixture: ComponentFixture<CreateoveralriskdescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateoveralriskdescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateoveralriskdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
