import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';

@Component({
  selector: 'lib-main-shell-warm-up',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet,
    RouterLinkWithHref],
  templateUrl: './main-shell-warm-up.component.html',
  styleUrl: './main-shell-warm-up.component.scss',
})
export class MainShellWarmUpComponent {}
