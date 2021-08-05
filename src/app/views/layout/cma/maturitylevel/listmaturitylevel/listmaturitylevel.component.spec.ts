import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmaturitylevelComponent } from './listmaturitylevel.component';

describe('ListmaturitylevelComponent', () => {
  let component: ListmaturitylevelComponent;
  let fixture: ComponentFixture<ListmaturitylevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmaturitylevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmaturitylevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
