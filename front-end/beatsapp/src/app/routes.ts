/*
        **************************************

                        Rutas

        **************************************
 */

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SingupComponent } from './components/singup/singup.component';
import { SigninComponent } from './components/signin/signin.component';
import { WallpostComponent } from './components/wallpost/wallpost.component';
import { ProfileComponent } from './components/profile/profile.component';

const RoutesArray: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'singup', component: SingupComponent },
    { path: 'singin', component: SigninComponent },
    { path: 'wallpost', component: WallpostComponent },
    { path: 'profile', component: ProfileComponent },
    { path: '**',   pathMatch: 'full', redirectTo: 'home' }
];

export const RoutingModule = RouterModule.forRoot( RoutesArray );
