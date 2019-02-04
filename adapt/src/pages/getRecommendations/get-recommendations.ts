import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HouseDetailTabsPage } from './../house-detail-tabs/house-detail-tabs';

@Component({
  selector: 'page-recommendations',
  templateUrl: 'get-recommendations.html'
})
export class RecommendationsPage {

  houses: Array<{name: string, houseID: number}>;
  houseSelected: String;
  constructor(public navCtrl: NavController) {
    this.houses = [];
    for (let i = 1; i < 11; i++) {
      this.houses.push({
        name: "house" + i,
        houseID: i
      });
    }
  }


  goToHouseDetail() {
    this.navCtrl.push(HouseDetailTabsPage);
  }
}
