import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Step00Component } from './step-00.component';

describe('Step00Component', () => {
  let component: Step00Component;
  let fixture: ComponentFixture<Step00Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step00Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Step00Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
