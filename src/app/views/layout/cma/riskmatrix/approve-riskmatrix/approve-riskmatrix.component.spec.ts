import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApproveriskmatrixComponent } from './approve-riskmatrix.component';



describe('ApproveriskmatrixComponent', () => {
  let component: ApproveriskmatrixComponent;
  let fixture: ComponentFixture<ApproveriskmatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveriskmatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveriskmatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
