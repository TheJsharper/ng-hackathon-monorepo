import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path:'',
        loadChildren : ()=> import('@ng-hackathon-monorepo/main-shell-warm-up').then( c=> c.warmUpRoutes)
    }
];
