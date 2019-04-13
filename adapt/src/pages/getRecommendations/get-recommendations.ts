import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HousesProvider} from './../../providers/housesService'
import { HouseDetailTabsPage } from './../house-detail-tabs/house-detail-tabs';
import { RecommendsTabsPage } from '../recommends-tabs/recommends-tabs';
import { House } from '../../shared/housesclass'
import { RecommendsPage } from '../recommends/recommends';

@Component({
  selector: 'page-recommendations',
  templateUrl: 'get-recommendations.html'
})
export class RecommendationsPage {
  userID = 1;
  housesObjects: House[]
  houses: Array<{name: string, houseID: number}>;
  rooms1 = [
    "Rain's Kitchen", "Sam's Bedroom", "Michelle's Bathroom", "Seth's Lair", "JR's Study" 
  ];
  rooms2 = [
    "Living Room", "Office", "Stairs", "Game Room", "Conservatory"
  ];
  rooms = [];
  houseSelected: String = "";

  constructor(public navCtrl: NavController, public housesProvider: HousesProvider,) {
    this.houses = [];
    for (let i = 1; i < 11; i++) {
      this.houses.push({
        name: "house" + i,
        houseID: i
      });
    }
  }


  getHouses(){
    this.housesProvider.getHouses(this.userID)
    .then( data => {
        this.housesObjects = data;
        console.log(data);
    }
    );
  }

  showRooms(houseID: any) {
    if (houseID == 1){
      this.rooms = this.rooms1;
    }
    if (houseID == 2){
      this.rooms = this.rooms2;
    }
  }


  goToRecommendTabs() {
    this.navCtrl.push(RecommendsPage);
  }
}
