import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ProductMockApiService, ProductService } from '@ng-hackathon-monorepo/shared-services';
import { Product } from '@ng-hackathon-monorepo/types';
import { Subject, takeUntil } from 'rxjs';

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
export class ListProductComponent  implements OnInit, OnDestroy{

  products: Array<Product> = [];

  private  productServiceApiMocker: ProductMockApiService = inject(ProductMockApiService); 
  
  private router : Router = inject(Router);
  
  
  private destroySignal:Subject<void> = new Subject<void>();


  ngOnInit(): void {
    this.productServiceApiMocker.getAll()
      .pipe(takeUntil(this.destroySignal))
    .subscribe((value)=> this.products = value);
  } 

  add():void{
    this.router.navigate(['/product-spa-router-base/add']);
  }

  ngOnDestroy(): void {
    this.destroySignal.unsubscribe()
  }
  
}
