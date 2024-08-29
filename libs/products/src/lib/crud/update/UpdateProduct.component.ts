import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductConfigViewService, ProductMockApiService } from '@ng-hackathon-monorepo/shared-services';
import { mergeMap, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'lib-app-update-product',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  templateUrl: './UpdateProduct.component.html',
  styleUrl: './UpdateProduct.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateProductComponent implements OnInit, OnDestroy {
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
        console.log("Retrieved", values);
        this.form.get('id')?.setValue(values.id)
        this.form.get('name')?.setValue(values.name)
        this.form.get('description')?.setValue(values.description)
        this.form.get('price')?.setValue(values.price)
        this.form.get('quantity')?.setValue(values.quantity)
        this.form.get('category')?.setValue(values.category)
      })
  }

  update(): void {
    this.productServiceApiMocker.put(this.form.value.id, this.form.value)
      .pipe(takeUntil(this.destroySignal))
      .subscribe();
    this.router.navigate(['/product-spa-router-base/list']);
  }
  ngOnDestroy(): void {
    this.destroySignal.unsubscribe();
  }
}
