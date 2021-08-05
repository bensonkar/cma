import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovematuritylevelComponent } from './approve-maturitylevel.component';

describe('ApprovematuritylevelComponent', () => {
  let component: ApprovematuritylevelComponent;
  let fixture: ComponentFixture<ApprovematuritylevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovematuritylevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovematuritylevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
