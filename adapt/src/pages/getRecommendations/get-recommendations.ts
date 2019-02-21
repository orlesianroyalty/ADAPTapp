import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HouseDetailTabsPage } from './../house-detail-tabs/house-detail-tabs';
import { RecommendsTabsPage } from '../recommends-tabs/recommends-tabs';

@Component({
  selector: 'page-recommendations',
  templateUrl: 'get-recommendations.html'
})
export class RecommendationsPage {

  houses: Array<{name: string, houseID: number}>;
  rooms1 = [
    "Rain's Kitchen", "Sam's Bedroom", "Michelle's Bathroom", "Seth's Lair", "JR's Study" 
  ];
  rooms2 = [
    "Living Room", "Office", "Stairs", "Game Room", "Conservatory"
  ];
  rooms = [];
  houseSelected: String = "";
  constructor(public navCtrl: NavController) {
    this.houses = [];
    for (let i = 1; i < 11; i++) {
      this.houses.push({
        name: "house" + i,
        houseID: i
      });
    }
  }

  showRooms(houseID: any) {
    if (houseID == 1){
      this.rooms = this.rooms1;
    }
    if (houseID == 2){
      this.rooms = this.rooms2;
    }
  }


  goToHouseDetail() {
    this.navCtrl.push(RecommendsTabsPage);
  }
}
