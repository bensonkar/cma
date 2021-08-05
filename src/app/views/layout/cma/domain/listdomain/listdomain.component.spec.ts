import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdomainComponent } from './listdomain.component';

describe('ListdomainComponent', () => {
  let component: ListdomainComponent;
  let fixture: ComponentFixture<ListdomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
