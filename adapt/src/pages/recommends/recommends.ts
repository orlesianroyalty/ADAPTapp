import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MobilityRecommends } from './../mobility-recommends/mobility-recommends';
import { SafetyRecommends } from './../safety-recommends/safety-recommends';
import { VisibilityRecommends } from './../visibility-recommends/visibility-recommends';
import { RecommendsTabsPage } from '../recommends-tabs/recommends-tabs';

@Component({
  selector: 'page-recommends',
  templateUrl: 'recommends.html'
})
export class RecommendsPage {
  type: any = 'visiblity';
  roomType: any = 'kitchen';
  imagePath: any = '';
  recommendations: any[] = [];

  constructor(public navCtrl: NavController) {
    this.setImage();
  }
  
  setImage() {
    switch (this.roomType) {
      case 'kitchen':
        this.imagePath = 'assets/imgs/Kitchen-BW.jpg';
        break;
      default: break;
    }
  }
}