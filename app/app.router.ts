import {ModuleWithProviders} from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


const appRoutes:Routes=[
    {
        path:'',
        component:AboutComponent
    }, {
        path:'contact',
        component:ContactComponent
    }
]