import { House } from './../../shared/housesclass';
import { CreateRoomPage } from './../create-room/create-room';
import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-create-house',
  templateUrl: 'create-house.html'
})
export class CreateHousePage {
    newHouse: House
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public viewCtrl: ViewController) {
    this.newHouse = new House();
  }

  create() {
    this.dismiss();
  }


  ionViewDidLoad() {
    //do the setups here for view did load
  }


  dismiss() {
    this.viewCtrl.dismiss();
}

}