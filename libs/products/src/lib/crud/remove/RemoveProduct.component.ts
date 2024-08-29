import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductMockApiService } from '@ng-hackathon-monorepo/shared-services';
import { Product } from '@ng-hackathon-monorepo/types';
import { mergeMap, Observable, of } from 'rxjs';

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
export class RemoveProductComponent implements OnInit{ 
 

  product:Observable<Product> = of({});

  private productServiceApiMocker: ProductMockApiService = inject(ProductMockApiService);

  private router: Router = inject(Router);

  private route:ActivatedRoute  = inject(ActivatedRoute);

 
  ngOnInit(): void {
    
 this.product =   this.route.paramMap
    .pipe(mergeMap((paramters)=> this.productServiceApiMocker.getById(paramters.get('id')?? '')))

    
  }

  remove(): void {
    this.product.pipe(mergeMap((p:Product)=>this.productServiceApiMocker.delete(p.id?? ''))).subscribe()
    
    this.router.navigate(['/product-spa-router-base/list']);
  }
}
