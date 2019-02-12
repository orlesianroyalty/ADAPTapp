import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HousesProvider} from './../../providers/houses'
import { HouseDetailTabsPage } from './../house-detail-tabs/house-detail-tabs';

@Component({
  selector: 'page-houses',
  templateUrl: 'houses.html'
})
export class HousesPage {
  houses: any;
  userID: String = "";

  constructor(public navCtrl: NavController, public housesProvider: HousesProvider) {
    this.userID = '123';
    this.houses = [{name:"My House", residents:2}, {name:"Another House", residents: 4}];

    this.housesProvider.getHouses(this.userID)
      .then( data => {
          this.houses = data;
          console.log(data);
      }
    );
  }


  goToHouseDetail(house) {
    this.navCtrl.push(HouseDetailTabsPage, {
      house: house
    });
  }

}
