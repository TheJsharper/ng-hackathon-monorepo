import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable(    )
export class ProductConfigViewService {

    private fb: FormBuilder = inject(FormBuilder);
    
    getProductFormGroup():FormGroup{
        return this.fb.group({
            id: new FormControl(''),
            name: new FormControl('', [Validators.required, Validators.minLength(5)]),
            description: new FormControl('', [Validators.required, Validators.minLength(5)]),
            price: new FormControl(null,[Validators.required, Validators.min(2)]),
            quantity: new FormControl(null, [Validators.required]),
            category: new FormControl('',[Validators.required]),
          });
    }
}