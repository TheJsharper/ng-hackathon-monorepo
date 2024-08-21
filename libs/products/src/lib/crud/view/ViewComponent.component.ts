import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-app-view-component',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ViewComponent.component.html',
  styleUrl: './ViewComponent.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewComponentComponent { }
