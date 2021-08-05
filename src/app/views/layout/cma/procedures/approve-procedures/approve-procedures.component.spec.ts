import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApproveproceduresComponent } from './approve-procedures.component';



describe('ApproveproceduresComponent', () => {
  let component: ApproveproceduresComponent;
  let fixture: ComponentFixture<ApproveproceduresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveproceduresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveproceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
