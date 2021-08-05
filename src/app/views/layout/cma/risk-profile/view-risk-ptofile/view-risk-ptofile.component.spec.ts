import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRiskPtofileComponent } from './view-risk-ptofile.component';

describe('ViewRiskPtofileComponent', () => {
  let component: ViewRiskPtofileComponent;
  let fixture: ComponentFixture<ViewRiskPtofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRiskPtofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRiskPtofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
