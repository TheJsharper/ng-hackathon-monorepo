import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductConfigViewService, ProductMockApiService } from '@ng-hackathon-monorepo/shared-services';
import { mergeMap, Subject, takeUntil } from 'rxjs';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  selector: 'lib-dulicate-product',
  templateUrl: './DuplicateProduct.component.html'
})

export class DuplicateProductComponent implements OnInit, OnDestroy {
  form: FormGroup;

  private fb: FormBuilder = inject(FormBuilder);

  private productServiceApiMocker: ProductMockApiService = inject(ProductMockApiService);

  private  productConfigView: ProductConfigViewService = inject(ProductConfigViewService); 

  private router: Router = inject(Router);

  private route: ActivatedRoute = inject(ActivatedRoute);

  private destroySignal: Subject<void> = new Subject<void>();

  constructor() {
    this.form = this.productConfigView.getProductFormGroup()
  }
  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        takeUntil(this.destroySignal),
        mergeMap((paramters) => this.productServiceApiMocker.getById(paramters.get('id') ?? ''))
      )
      .subscribe((values) => {
        this.form.get('id')?.setValue(values.id)
        this.form.get('name')?.setValue(values.name)
        this.form.get('description')?.setValue(values.description)
        this.form.get('price')?.setValue(values.price)
        this.form.get('quantity')?.setValue(values.quantity)
        this.form.get('category')?.setValue(values.category)
      })
  }

  duplicate(): void {
    this.productServiceApiMocker.post(this.form.value)
      .pipe(takeUntil(this.destroySignal))
      .subscribe();
    this.router.navigate(['/product-spa-router-base/list']);
  }

  ngOnDestroy(): void {
    this.destroySignal.unsubscribe();
  }
}