import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-app-remove',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'./RemoveProduct.component.html',
  styleUrl: './RemoveProduct.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoveProductComponent { }
