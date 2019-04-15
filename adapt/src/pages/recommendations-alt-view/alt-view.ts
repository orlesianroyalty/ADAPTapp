import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-alt-view',
  templateUrl: 'alt-view.html'
})
export class AltView {
  recommendations: any[] = ["Recommendation 1", "Recommendation 2"];
  imagePath: any = '';
      constructor(private navCtrl: NavController, private navParams: NavParams) {
        this.setImagePath();
      }

      setImagePath() {
        this.imagePath = '../../assets/imgs/Kitchen-BW.jpg';
      }
}