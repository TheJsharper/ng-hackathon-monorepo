import { Route } from '@angular/router';
import { MainShellHackathonAppsComponent } from '../main-shell-hackathon-apps/main-shell-hackathon-apps.component';

export const hackathonRouteLIst: Route[] = [
    {
        path:'',
         component: MainShellHackathonAppsComponent,

         children:[
            {
                path:'step-00',
                loadComponent : ()=> import('@ng-hackathon-monorepo/step-00').then( c => c.Step00Component)
            }
         ]
    }
];
