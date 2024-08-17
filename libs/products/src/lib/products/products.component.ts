import { CommonModule, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductService, SharedServicesModule } from '@ng-hackathon-monorepo/shared-services';
import { Product } from '@ng-hackathon-monorepo/types';

@Component({
  selector: 'lib-products',
  standalone: true,
  imports: [CommonModule, NgFor,SharedServicesModule ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  private productService: ProductService = inject(ProductService);

   products: Array<Product> = this.productService.getProductsData();;
}
