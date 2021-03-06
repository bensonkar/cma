import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveUsersComponent } from './approve-users.component';

describe('ListusersComponent', () => {
  let component: ApproveUsersComponent;
  let fixture: ComponentFixture<ApproveUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
