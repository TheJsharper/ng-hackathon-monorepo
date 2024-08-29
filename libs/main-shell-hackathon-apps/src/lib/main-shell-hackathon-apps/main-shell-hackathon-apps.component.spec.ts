import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainShellHackathonAppsComponent } from './main-shell-hackathon-apps.component';

describe('MainShellHackathonAppsComponent', () => {
  let component: MainShellHackathonAppsComponent;
  let fixture: ComponentFixture<MainShellHackathonAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainShellHackathonAppsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainShellHackathonAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
