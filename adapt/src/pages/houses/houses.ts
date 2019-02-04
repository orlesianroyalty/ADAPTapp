import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { HouseDetailTabsPage } from './../house-detail-tabs/house-detail-tabs';

@Component({
  selector: 'page-houses',
  templateUrl: 'houses.html'
})
export class HousesPage {


  houses: Array<{name: string, houseID: string}>;

  constructor(public navCtrl: NavController) {

    this.houses = [];
    for (let i = 1; i < 11; i++) {
      this.houses.push({
        name: "house" + i,
        houseID: "" + i
      });
    }
  }


  goToHouseDetail(event, house) {
    this.navCtrl.push(HouseDetailTabsPage, {
      house: house
    });
  }

}
