import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApproveoveralriskdescriptionComponent } from './approve-overalriskdescription.component';



describe('ApproveoveralriskdescriptionComponent', () => {
  let component: ApproveoveralriskdescriptionComponent;
  let fixture: ComponentFixture<ApproveoveralriskdescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveoveralriskdescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveoveralriskdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
