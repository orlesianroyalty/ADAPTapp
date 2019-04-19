import { CreateHousePage } from './../create-house/create-house';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {HousesProvider} from './../../providers/housesService'
import { HouseDetailTabsPage } from './../house-detail-tabs/house-detail-tabs';
import { House } from './../../shared/housesclass'
import { UserProvider } from '../../providers/userService';

@Component({
  selector: 'page-houses',
  templateUrl: 'houses.html'
})
export class HousesPage {
  houses: House[];
  userID: number;

  constructor(public navCtrl: NavController, 
    public housesProvider: HousesProvider, 
    public userSession: UserProvider,
    public modalCtrl: ModalController) {
    this.userID = userSession.user.userId;
  }

  ionViewWillEnter(){
    this.getHouses();
  }

  getHouses(){
    this.housesProvider.getHouses(this.userID).subscribe(houses => {
      this.houses = houses;
      console.log(houses);
    })
  }

  goToCreate() {
    const modal = this.modalCtrl.create(
      CreateHousePage,
       {'userID': this.userID}
    );
    modal.onDidDismiss(data => {
      this.getHouses();
      //console.log(data);
    });
    modal.present();
  }


  goToHouseDetail(house) {
    this.navCtrl.push(HouseDetailTabsPage, {
      house: house
    });
  }

}
