import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { UsersComponent }  from './components/users/users.component';
import {NavBarComponent  } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import {routing} from './app.router';

@NgModule({
  imports:      [ BrowserModule,routing],
  declarations: [ AppComponent,UsersComponent, NavBarComponent,ContactComponent,AboutComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
