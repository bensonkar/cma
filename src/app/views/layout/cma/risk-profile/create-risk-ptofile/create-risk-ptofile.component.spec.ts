import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRiskPtofileComponent } from './create-risk-ptofile.component';

describe('CreateRiskPtofileComponent', () => {
  let component: CreateRiskPtofileComponent;
  let fixture: ComponentFixture<CreateRiskPtofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRiskPtofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRiskPtofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
