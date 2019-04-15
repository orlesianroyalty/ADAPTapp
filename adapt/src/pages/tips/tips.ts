import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TipProvider} from './../../providers/tipService'
import { TipsListPage } from '../tips-list/tips-list';

@Component({
  selector: 'page-tips',
  templateUrl: 'tips.html'
})
export class TipsPage {
  tipTypes = [
    'Financial Aid',
    'State/Federal Programs',
    'Building Professionals',
    'Products',
    'Videos',
    'Technology'
  ];
  constructor(public navCtrl: NavController, public tipProvider: TipProvider) {

  }

  goToTipsListPage(selectedType) {
    console.log("slected:" + selectedType);
    const pageTitle = this.tipTypes[selectedType] + " Tips";
    this.navCtrl.push(TipsListPage, {
      tipType: selectedType,
      pageTitle: pageTitle
    });
  }

}
