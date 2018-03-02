/*
        **************************************

                        Rutas

        **************************************
 */

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const RoutesArray: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '**',   pathMatch: 'full', redirectTo: 'home' }
];

export const RoutingModule = RouterModule.forRoot( RoutesArray );
