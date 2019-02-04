import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-houses',
  templateUrl: 'houses.html'
})
export class HousesPage {


  houses: Array<{name: string}>;

  constructor(public navCtrl: NavController) {
    this.houses = [];
    for (let i = 1; i < 11; i++) {
      this.houses.push({
        name: "house" + i
      });
    }
  }

}
