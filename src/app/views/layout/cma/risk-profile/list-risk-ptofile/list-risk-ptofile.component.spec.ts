import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRiskPtofileComponent } from './list-risk-ptofile.component';

describe('ListRiskPtofileComponent', () => {
  let component: ListRiskPtofileComponent;
  let fixture: ComponentFixture<ListRiskPtofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRiskPtofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRiskPtofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
