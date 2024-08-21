import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-app-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './ListProduct.component.html',
  styleUrl: './ListProduct.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListProductComponent { }
