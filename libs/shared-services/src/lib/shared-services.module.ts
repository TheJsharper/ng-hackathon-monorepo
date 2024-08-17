import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';

@NgModule({
  imports: [CommonModule],
  providers:[ProductService]
})
export class SharedServicesModule {}
