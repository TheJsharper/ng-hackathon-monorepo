import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-main-shell-warm-up',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet,
    RouterLinkWithHref, RouterLink, RouterLinkActive],
  templateUrl: './main-shell-warm-up.component.html',
  styleUrl: './main-shell-warm-up.component.scss',
})
export class MainShellWarmUpComponent {}
