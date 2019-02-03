import { RecommendationsPage } from './../getRecommendations/get-recommendations';
import { ChecklistPage } from './../myChecklist/my-checklist';
import { HouseProfileTabsPage } from './../house-profile-tabs/house-profile';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TipsPage } from '../tips/tips';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToHouseProfilePage() {
    this.navCtrl.push(HouseProfileTabsPage);
  }

  goToMyChecklistPage() {
    this.navCtrl.push(ChecklistPage);
  }

  goToTipsPage() {
    this.navCtrl.push(TipsPage);
  }

  goToRecommendationsPage() {
    this.navCtrl.push(RecommendationsPage);
  }

}
