import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path:'',
        loadComponent : ()=> import('@ng-hackathon-monorepo/main-shell-warm-up').then( c=> c.MainShellWarmUpComponent)
    }
];
