import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainShellWarmUpComponent } from './main-shell-warm-up.component';

describe('MainShellWarmUpComponent', () => {
  let component: MainShellWarmUpComponent;
  let fixture: ComponentFixture<MainShellWarmUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainShellWarmUpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainShellWarmUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
