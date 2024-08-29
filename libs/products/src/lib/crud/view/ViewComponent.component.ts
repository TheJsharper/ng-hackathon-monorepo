import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductMockApiService } from '@ng-hackathon-monorepo/shared-services';
import { Product } from '@ng-hackathon-monorepo/types';
import { mergeMap, Observable, of, Subject, takeUntil } from 'rxjs';

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
export class ViewComponentComponent implements OnInit, OnDestroy {


  product: Observable<Product> = of({});

  private productServiceApiMocker: ProductMockApiService = inject(ProductMockApiService);

  private router: Router = inject(Router);

  private route: ActivatedRoute = inject(ActivatedRoute);

  private destroySignal:Subject<void> = new Subject<void>();

  ngOnInit(): void {

    this.product = this.route.paramMap
      .pipe(
        takeUntil(this.destroySignal),
        mergeMap((paramters) => this.productServiceApiMocker.getById(paramters.get('id') ?? ''))
      )


  }

  redirectToList(): void {
    this.router.navigate(['/product-spa-router-base/list']);
  }

  ngOnDestroy(): void {
    this.destroySignal.unsubscribe();
  }
}
