import { Injectable } from '@angular/core';
import { Product } from '@ng-hackathon-monorepo/types';
import { map, Observable, of } from 'rxjs';

@Injectable(    )
export class ProductMockApiService {
   
    products:Observable<Array<Product>> = of([]);

    getAll():Observable<Array<Product>>{
        return this.products;
    }

    getById(id:string):Observable<Product>{
        return this.products
        .pipe(map((values)=> values.find((p)=> p.id ===id)?? {} ));

    }
    
    post(product:Product):Observable<Array<Product>>{
     this.products = this.products.pipe(map((values)=>[...values, product]));
     return this.products;   
    }

    put(id:string, product:Product):Observable<Array<Product>>{
     this.products = this.products.pipe(map((values)=>{
        const others = values.filter((product)=> product !== id);
        return [...others, product];
    }));

    return this.products;

    }

    delete(id:string):Observable<Array<Product>>{
        this.products = this.products.pipe(map((values)=>{
            const others = values.filter((product)=> product !== id);
            return [...others];
        }));
        return this.products;
    }
    
}