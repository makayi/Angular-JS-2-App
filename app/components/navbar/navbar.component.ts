import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'nav-bar',
  templateUrl: 'nav.component.html'
})
export class NavBarComponent  { 
  private home:string;
  private about:string;
  private contact:string;

  private contactLink:string;
  private aboutLink:string;
  private homeLink:string;

  constructor(){
    this.about="About";
    this.contact="Contact";
    this.home="Home";

    this.aboutLink="/About";
    this.contactLink="/contact";
    this.homeLink="";
  }

  
 }




