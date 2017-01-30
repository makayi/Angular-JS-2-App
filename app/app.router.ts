import {ModuleWithProviders} from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import {  } from './components/home/home.component';


const appRoutes:Routes=[
    {
        path:'',
        component:AboutComponent
    }, {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'home',
        component:hom
    }
];

export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);