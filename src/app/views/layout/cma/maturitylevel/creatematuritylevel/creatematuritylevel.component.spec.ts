import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatematuritylevelComponent } from './creatematuritylevel.component';

describe('CreatematuritylevelComponent', () => {
  let component: CreatematuritylevelComponent;
  let fixture: ComponentFixture<CreatematuritylevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatematuritylevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatematuritylevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
