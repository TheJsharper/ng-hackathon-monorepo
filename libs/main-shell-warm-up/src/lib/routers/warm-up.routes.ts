import { Route } from '@angular/router';
import { MainShellWarmUpComponent } from '../main-shell-warm-up/main-shell-warm-up.component';

export const warmUpRoutes: Route[] = [
    {
        path: '',

        component: MainShellWarmUpComponent,
        providers: [
        ],

        children: [
            {
                path: 'product-spa-router-base',

                loadChildren: () => import('@ng-hackathon-monorepo/products').then(p => p.productRoutes)

            },
            {
                path: '',
                redirectTo: 'product-spa-router-base', pathMatch: 'full'
            }
            ,
            {
                path: '**',
                redirectTo: 'product-spa-router-base', pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'product-spa-router-base/list', pathMatch: 'full'
    }
    ,
    {
        path: '**',
        redirectTo: 'product-spa-router-base/list', pathMatch: 'full'
    }
];
