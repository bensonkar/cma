import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedomainComponent } from './createdomain.component';

describe('CreatedomainComponent', () => {
  let component: CreatedomainComponent;
  let fixture: ComponentFixture<CreatedomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
