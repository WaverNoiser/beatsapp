/*
        **************************************

                        Rutas

        **************************************
 */

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SingupComponent } from './components/singup/singup.component';

const RoutesArray: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'singup', component: SingupComponent },
    { path: '**',   pathMatch: 'full', redirectTo: 'home' }
];

export const RoutingModule = RouterModule.forRoot( RoutesArray );
