import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HousesProvider} from './../../providers/houses'
import { HouseDetailTabsPage } from './../house-detail-tabs/house-detail-tabs';

@Component({
  selector: 'page-houses',
  templateUrl: 'houses.html',
  providers: HousesProvider
})
export class HousesPage {

  userID: String = "";
  houses: Array<{name: string}>;

  constructor(public navCtrl: NavController, public housesProvider: HousesProvider) {
    this.userID = '123';
    this.houses = [];
    for (let i = 1; i < 11; i++) {
      this.houses.push({
        name: "house" + i
      });
    }

    this.housesProvider.getHouses(this.userID)
    .subscribe( data=> {

        console.log(data);
    }
    );
  }


  goToHouseDetail(event, house) {
    this.navCtrl.push(HouseDetailTabsPage, {
      house: house
    });
  }

}
