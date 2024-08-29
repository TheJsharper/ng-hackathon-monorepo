import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { ProductMockApiService } from './services/product-mock-api.service';
import { ProductConfigViewService } from './services/product-config-view.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  providers:[ProductService, ProductMockApiService, ProductConfigViewService],
  exports:[]
})
export class SharedServicesModule {}
