import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HousesProvider} from './../../providers/housesService'
import { HouseDetailTabsPage } from './../house-detail-tabs/house-detail-tabs';
import { RecommendsTabsPage } from '../recommends-tabs/recommends-tabs';
import { House } from '../../shared/housesclass'
import { RecommendsPage } from '../recommends/recommends';
import { UserProvider } from '../../providers/userService';

@Component({
  selector: 'page-recommendations',
  templateUrl: 'get-recommendations.html'
})
export class RecommendationsPage {
  userID: number;
  houses: House[];
  rooms : Array<{typeId:number, name: string }>;
  selectedHouseId: number = 0;

  constructor(public navCtrl: NavController, public housesProvider: HousesProvider, public userSession: UserProvider) {
    this.userID = userSession.user.userId;
    this.initializeRoomTypes()
    this.populateHousesArray([]);
    this.getHouses();
    this.selectedHouseId = 0;

  }

  initializeRoomTypes(){
    this.rooms = [
      {typeId:0, name: "Space Outside the Home" },
      {typeId:1, name: "Entrance Into the Home" },
      {typeId:2, name: "Travel Space Through the Home" },
      {typeId:3, name: "Kitchen" },
      {typeId:4, name: "Restroom" },
      {typeId:5, name: "Bedroom" },
      {typeId:6, name: "Storage" },
      {typeId:7, name: "Laundry" },
      {typeId:8, name: "General" },
    ];
  
  }

  getHouses(){
    this.housesProvider.getHouses(this.userID).subscribe(houses => {
      this.populateHousesArray(houses);
    })
  }

  populateHousesArray(houses){
    const noHouseSelected = new House({name: "No House Selected", id: 0, numResident:0})
    this.houses = [...[noHouseSelected], ...houses];  
  }


  showRecommendations(room) {
    console.log("my house id");
    console.log(this.selectedHouseId);  
    console.log(this.houses);
    this.navCtrl.push(RecommendsPage, {
      roomType: room.typeId,
      houseId: this.selectedHouseId,
      roomName:room.name
    });
  }
}
