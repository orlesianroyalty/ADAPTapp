import { House } from './../../shared/housesclass';
import { Component, Input } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';
import {HousesProvider} from './../../providers/housesService'

@Component({
  selector: 'page-create-house',
  templateUrl: 'create-house.html'
})
export class CreateHousePage {
    newHouse: House;
    @Input() userID: number;

  constructor(public navCtrl: NavController, public housesProvider: HousesProvider, public modalCtrl: ModalController, public viewCtrl: ViewController) {
    this.newHouse = new House();
  }

  create() {
    console.log(this.newHouse)
    this.housesProvider.create(this.userID, this.newHouse)
      .then( data => {
          console.log(data);
      }
    );
    this.dismiss();
  }


  ionViewDidLoad() {
    //do the setups here for view did load
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}