import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlikelyhoodComponent } from './listlikelyhood.component';

describe('ListlikelyhoodComponent', () => {
  let component: ListlikelyhoodComponent;
  let fixture: ComponentFixture<ListlikelyhoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListlikelyhoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlikelyhoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
