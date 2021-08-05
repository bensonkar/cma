import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOverralriskComponent } from './update-overralrisk.component';

describe('UpdateOverralriskComponent', () => {
  let component: UpdateOverralriskComponent;
  let fixture: ComponentFixture<UpdateOverralriskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOverralriskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOverralriskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
