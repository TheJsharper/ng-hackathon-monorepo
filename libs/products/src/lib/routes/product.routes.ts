import { importProvidersFrom } from '@angular/core';
import { Route } from '@angular/router';
import { SharedServicesModule } from '@ng-hackathon-monorepo/shared-services';

export const productRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('../products/products.component').then(c => c.ProductsComponent),

        providers:[
            importProvidersFrom(  SharedServicesModule)
        ],
        

        children: [
            {

                path: 'list',
                loadComponent: () => import('../crud/list/ListProduct.component').then(c => c.ListProductComponent)
            },

            {

                path: 'update/:id',
                loadComponent: () => import('../crud/update/UpdateProduct.component').then(c => c.UpdateProductComponent)
            },
            {

                path: 'remove/:id',
                loadComponent: () => import('../crud/remove/RemoveProduct.component').then(c => c.RemoveProductComponent)
            },
            {

                path: 'details/:id',
                loadComponent: () => import('../crud/view/ViewComponent.component').then(c => c.ViewComponentComponent)
            },
            {

                path: 'add',
                loadComponent: () => import('../crud/add/AddProduct.component').then(c => c.AddProductComponent)
            },
            {

                path: 'duplicate/:id',
                loadComponent: () => import('../crud/duplicate/DuplicateProduct.component').then(c => c.DuplicateProductComponent)
            },
            {
                path: '**',
                redirectTo: 'list', pathMatch: 'full'
            }
        ]

    }
    ,
    {
        path: '',
        redirectTo: 'list', pathMatch: 'full'
    }
    ,
    {
        path: '**',
        redirectTo: 'list', pathMatch: 'full'
    }

];
