import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-app-update-product',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'./UpdateProduct.component.html',
  styleUrl:'./UpdateProduct.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateProductComponent { }
