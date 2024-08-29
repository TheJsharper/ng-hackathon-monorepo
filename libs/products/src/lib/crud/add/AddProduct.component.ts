import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductMockApiService } from '@ng-hackathon-monorepo/shared-services';
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
export class AddProductComponent implements OnDestroy{

  form: FormGroup;

  private fb: FormBuilder = inject(FormBuilder);

  private  productServiceApiMocker: ProductMockApiService = inject(ProductMockApiService); 

  private router : Router = inject(Router);

  private destroySignal:Subject<void> = new Subject<void>();

  constructor() {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      description: new FormControl('', [Validators.required, Validators.minLength(5)]),
      price: new FormControl(null,[Validators.required, Validators.min(2)]),
      quantity: new FormControl(null, [Validators.required]),
      category: new FormControl('',[Validators.required]),
    });
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
