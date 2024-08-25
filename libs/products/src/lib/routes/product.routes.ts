import { Route } from '@angular/router';

export const productRoutes: Route[] = [
    {
        path: '',
        loadComponent: () => import('../products/products.component').then(c => c.ProductsComponent),

        children: [
            {

                path: 'list',
                loadComponent: () => import('../crud/list/ListProduct.component').then(c => c.ListProductComponent)
            },

            {

                path: 'update',
                loadComponent: () => import('../crud/update/UpdateProduct.component').then(c => c.UpdateProductComponent)
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
