import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MobilityRecommends } from './../mobility-recommends/mobility-recommends';
import { SafetyRecommends } from './../safety-recommends/safety-recommends';
import { VisibilityRecommends } from '../visibility-recommends/visibility-recommends';

@Component({
  selector: 'page-recommends-tabs',
  templateUrl: 'recommends-tabs.html'
})
export class RecommendsTabsPage {
  tab1 = MobilityRecommends;
  tab2 = SafetyRecommends;
  tab3 = VisibilityRecommends;

  constructor(public navCtrl: NavController) {
    this.tab1 = MobilityRecommends;
    this.tab2 = SafetyRecommends;
    this.tab3 = VisibilityRecommends;
  }

}