import { RecommendationsPage } from './../getRecommendations/get-recommendations';
import { ChecklistPage } from './../myChecklist/my-checklist';
import { MyProfileTabsPage } from './../my-profile-tabs/my-profile';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TipsPage } from '../tips/tips';
import { RecommendsPage } from '../recommends/recommends';
import { RecommendsTabsPage } from '../recommends-tabs/recommends-tabs';

import {AuthenticatedUser} from '../../shared/user'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //TODO, update this to read version from ionic config file.
  version: String = "v0.0.3  ";
  user: AuthenticatedUser;

  constructor(public navCtrl: NavController,public navParams: NavParams) {

    this.user  = navParams.get('user');
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
