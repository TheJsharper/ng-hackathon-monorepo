import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path:'',
         loadChildren : ()=> import('@ng-hackathon-monorepo/main-shell-warm-up').then( c=> c.warmUpRoutes)
    },
    {
        path:'app-list',
         loadChildren : ()=> import('@ng-hackathon-monorepo/main-shell-hackathon-apps').then( c=> c.hackathonRouteLIst)
    },
    {
        path:'app-list',
        redirectTo:'/', pathMatch: 'full'
    }
];
