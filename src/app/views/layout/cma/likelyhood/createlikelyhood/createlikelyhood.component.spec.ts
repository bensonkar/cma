import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelikelyhoodComponent } from './createlikelyhood.component';

describe('CreatelikelyhoodComponent', () => {
  let component: CreatelikelyhoodComponent;
  let fixture: ComponentFixture<CreatelikelyhoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatelikelyhoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatelikelyhoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
