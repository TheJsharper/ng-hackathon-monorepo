import { Route } from '@angular/router';
import { ProductMockApiService } from '@ng-hackathon-monorepo/shared-services';

export const productRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('../products/products.component').then(c => c.ProductsComponent),

        providers:[ProductMockApiService],

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
