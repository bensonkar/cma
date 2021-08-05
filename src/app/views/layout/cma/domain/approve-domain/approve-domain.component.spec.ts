import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedomainComponent } from './approve-domain.component';

describe('ApprovedomainComponent', () => {
  let component: ApprovedomainComponent;
  let fixture: ComponentFixture<ApprovedomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
