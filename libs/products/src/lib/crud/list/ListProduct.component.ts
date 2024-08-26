import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductService } from '@ng-hackathon-monorepo/shared-services';
import { Product } from '@ng-hackathon-monorepo/types';

@Component({
  selector: 'lib-app-list',
  standalone: true,
  imports: [
    CommonModule, RouterLink, RouterLinkActive
  ],
  providers:[ProductService],
  templateUrl: './ListProduct.component.html',
  styleUrl: './ListProduct.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListProductComponent { 
  private productService: ProductService = inject(ProductService);

  private router : Router = inject(Router);
  products: Array<Product> = this.productService.getProductsData();


  add():void{
    this.router.navigate(['/product-spa-router-base/add']);
  }
}
