import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SavedPage } from '../saved/saved';

@Component({
  selector: 'page-checklist',
  templateUrl: 'my-checklist.html'
})
export class ChecklistPage {

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

  goToSavedPage() {
    this.navCtrl.push(SavedPage);
  }

}
