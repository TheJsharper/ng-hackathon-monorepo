import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-main-shell-hackathon-apps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-shell-hackathon-apps.component.html',
  styleUrl: './main-shell-hackathon-apps.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainShellHackathonAppsComponent {}
