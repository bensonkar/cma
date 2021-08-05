import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRiskPtofileComponent } from './update-risk-ptofile.component';

describe('UpdateRiskPtofileComponent', () => {
  let component: UpdateRiskPtofileComponent;
  let fixture: ComponentFixture<UpdateRiskPtofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRiskPtofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRiskPtofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
