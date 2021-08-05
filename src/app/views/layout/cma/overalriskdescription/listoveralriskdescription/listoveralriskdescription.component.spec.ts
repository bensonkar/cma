import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListoveralriskdescriptionComponent } from './listoveralriskdescription.component';

describe('ListoveralriskdescriptionComponent', () => {
  let component: ListoveralriskdescriptionComponent;
  let fixture: ComponentFixture<ListoveralriskdescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListoveralriskdescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListoveralriskdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
