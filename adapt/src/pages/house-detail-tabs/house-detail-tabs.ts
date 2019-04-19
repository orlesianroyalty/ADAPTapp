import { ResidentsPage } from './../residents/residents';
import { RoomsPage } from './../rooms/rooms';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-house-detail-tabs',
  templateUrl: 'house-detail-tabs.html'
})
export class HouseDetailTabsPage {
  tab1: any;
  tab2: any;
  houseId: number;

  constructor(public navCtrl: NavController,public navParams: NavParams) {
    this.houseId  = navParams.get('houseId');
    this.tab1 = RoomsPage;
    this.tab2 = ResidentsPage;

  }

}
