import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-main-shell-hackathon-apps',
  standalone: true,
  imports: [CommonModule,RouterOutlet,
    RouterLinkWithHref, RouterLink, RouterLinkActive],
  templateUrl: './main-shell-hackathon-apps.component.html',
  styleUrl: './main-shell-hackathon-apps.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainShellHackathonAppsComponent {}
