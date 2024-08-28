import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductMockApiService } from '@ng-hackathon-monorepo/shared-services';
import { mergeMap } from 'rxjs';

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
export class UpdateProductComponent implements OnInit{
  form: FormGroup;

  private fb: FormBuilder = inject(FormBuilder);

  private productServiceApiMocker: ProductMockApiService = inject(ProductMockApiService);

  private router: Router = inject(Router);

  private route:ActivatedRoute  = inject(ActivatedRoute);

  constructor() {
    this.form = this.fb.group({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      description: new FormControl('', [Validators.required, Validators.minLength(5)]),
      price: new FormControl(null, [Validators.required, Validators.min(2)]),
      quantity: new FormControl(null, [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
    
    this.route.paramMap
    .pipe(mergeMap((paramters)=> this.productServiceApiMocker.getById(paramters.get('id')?? '')))
    .subscribe((values)=>{
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
    this.productServiceApiMocker.put(this.form.value.id,  this.form.value).subscribe();
    this.router.navigate(['/product-spa-router-base/list']);
  }
}
