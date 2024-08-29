import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnDestroy } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductConfigViewService, ProductMockApiService } from '@ng-hackathon-monorepo/shared-services';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'lib-app-add-product',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  templateUrl: './AddProduct.component.html',
  styleUrl: './AddProduct.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent implements OnDestroy {

  form: FormGroup;

  private productServiceApiMocker: ProductMockApiService = inject(ProductMockApiService);

  private productConfigView: ProductConfigViewService = inject(ProductConfigViewService);

  private router: Router = inject(Router);

  private destroySignal: Subject<void> = new Subject<void>();

  constructor() {
    this.form = this.productConfigView.getProductFormGroup();
  }

  save(): void {
    this.productServiceApiMocker.post(this.form.value)
      .pipe(takeUntil(this.destroySignal))
      .subscribe();
    this.router.navigate(['/product-spa-router-base/list']);
  }
  ngOnDestroy(): void {
    this.destroySignal.unsubscribe();
  }
}
