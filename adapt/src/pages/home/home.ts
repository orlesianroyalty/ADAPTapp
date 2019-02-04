import { RecommendationsPage } from './../getRecommendations/get-recommendations';
import { ChecklistPage } from './../myChecklist/my-checklist';
import { MyProfileTabsPage } from './../my-profile-tabs/my-profile';
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

  goToMyProfilePage() {
    this.navCtrl.push(MyProfileTabsPage);
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
