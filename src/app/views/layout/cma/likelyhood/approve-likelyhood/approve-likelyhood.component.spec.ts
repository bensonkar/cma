import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovelikelyhoodComponent } from './approve-likelyhood.component';

describe('ApprovelikelyhoodComponent', () => {
  let component: ApprovelikelyhoodComponent;
  let fixture: ComponentFixture<ApprovelikelyhoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovelikelyhoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovelikelyhoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
