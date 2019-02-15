import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SavedTipsPage } from './../savedTips/saved-tips';
import { SavedRecommendsPage } from './../savedRecommendations/saved-recommends';

@Component({
  selector: 'page-saved',
  templateUrl: 'saved.html'
})
export class SavedPage {

  constructor(public navCtrl: NavController) {

  }

  goToSavedTipsPage() {
    this.navCtrl.push(SavedTipsPage);
  }

  goToSavedRecommendsPage() {
    this.navCtrl.push(SavedRecommendsPage);
  }

}