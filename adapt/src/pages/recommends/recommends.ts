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
 

  constructor(public navCtrl: NavController) {

  }

    
      goToVisibilityPage() {
        this.navCtrl.push(RecommendsTabsPage);
      }
    
      goToSafetyPage() {
        this.navCtrl.push(SafetyRecommends);
      }
    
      goToMobilityPage() {
        this.navCtrl.push(MobilityRecommends);
      }
  
}