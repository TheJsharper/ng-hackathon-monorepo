import { Injectable } from '@angular/core';
import { Product } from '@ng-hackathon-monorepo/types';
import { map, Observable, of } from 'rxjs';

@Injectable(    )
export class ProductMockApiService {
   
    products:Observable<Array<Product>> = of([
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1001',
            code: 'nvklal433',
            name: 'Black Watch',
            description: 'Product Description',
            image: 'black-watch.jpg',
            price: 72,
            category: 'Accessories',
            quantity: 61,
            inventoryStatus: 'OUTOFSTOCK',
            rating: 4
        },
    ]);

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