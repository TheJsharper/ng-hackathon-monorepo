import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
export class AddProductComponent { 

  form:FormGroup;
    constructor(private fb:FormBuilder){
      this.form = this.fb.group( {
        name: new FormControl('')
      })
    }
}
