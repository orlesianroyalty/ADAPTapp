import { Component, Input } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import {TipProvider} from './../../providers/tipService'
import { Tip, TipType } from './../../shared/tip'
import { TipDetailPage } from '../tip-detail/tip-detail';

@Component({
  selector: 'page-tips-list',
  templateUrl: 'tips-list.html'
})
export class TipsListPage {

  tips: Tip[];
  tipType: number;
  tipListTitle: String;

  constructor(public navCtrl: NavController,public navParams: NavParams, public tipProvider: TipProvider, public modalCtrl: ModalController) {
    this.tipType = navParams.get('tipType');
    this.tipListTitle = navParams.get('pageTitle');
  }

  ionViewWillEnter(){
    this.getTips();
  }

  getTips(){
    this.tipProvider.getTipsFor(this.tipType)
    .then( data  => {
        this.tips = data;
        console.log(data);
    }
    );
  }

  getColor(tipSubtype) {

    switch (tipSubtype) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }


  gotoTipDetail(tip) {
    const modal = this.modalCtrl.create(
        TipDetailPage,
         {'tip': tip}, //TODO add user id or house id for saving purpose
         {cssClass: 'small-modal' });
      modal.onDidDismiss(data => {
        this.getTips();
        //console.log(data);
      });
      modal.present();
  }

}
