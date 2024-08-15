import { Route } from '@angular/router';
import { MainShellWarmUpComponent } from '../main-shell-warm-up/main-shell-warm-up.component';

export const warmUpRoutes: Route[] = [
    {
        path:'',

        component: MainShellWarmUpComponent,

       children:[
        {
            path:'product-spa-router-base',

            loadChildren: ()=> import('@ng-hackathon-monorepo/products').then(p => p.ProductsComponent)

        }
       ]
    }
];
