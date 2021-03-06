import { ResidentsPage } from './../residents/residents';
import { HousesPage } from './../houses/houses';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html'
})
export class MyProfileTabsPage {

  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController) {
    this.tab1 = HousesPage;
    this.tab2 = ResidentsPage;
  }

}
