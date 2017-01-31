import {ModuleWithProviders} from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';


const appRoutes:Routes=[
    {
        path:'About',
        component:AboutComponent
    }, {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'',
        component:HomeComponent
    }
];

export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);