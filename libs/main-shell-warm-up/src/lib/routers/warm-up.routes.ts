import { Route } from '@angular/router';
import { MainShellWarmUpComponent } from '../main-shell-warm-up/main-shell-warm-up.component';

export const warmUpRoutes: Route[] = [
    {
        path:'',

        component: MainShellWarmUpComponent,
        providers:[
        ], 

       children:[
        {
            path:'product-spa-router-base',

            loadComponent: ()=> import('@ng-hackathon-monorepo/products').then(p => p.ProductsComponent)

        }
       ]
    }
];
