import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmaturitylevelComponent } from './view-maturitylevel.component';

describe('ViewmaturitylevelComponent', () => {
  let component: ViewmaturitylevelComponent;
  let fixture: ComponentFixture<ViewmaturitylevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmaturitylevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmaturitylevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
