import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductMockApiService } from '@ng-hackathon-monorepo/shared-services';

@Component({
  selector: 'lib-app-add-product',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  //providers:[ProductMockApiService],
  templateUrl: './AddProduct.component.html',
  styleUrl: './AddProduct.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent {

  form: FormGroup;
  private fb: FormBuilder = inject(FormBuilder);
  private  productServiceApiMocker: ProductMockApiService = inject(ProductMockApiService); 
  private router : Router = inject(Router);
  constructor() {
    this.form = this.fb.group({
      name: new FormControl(''),

      description: new FormControl(''),
      price: new FormControl(''),
      quantity: new FormControl(''),
      category: new FormControl(''),
    })
  }

  save(): void {
    this.productServiceApiMocker.post(this.form.value).subscribe();
    this.router.navigate(['/product-spa-router-base/list']);
  }
}
