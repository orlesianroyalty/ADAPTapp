import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    constructor(public navCtrl: NavController) {}

    login() {
      this.navCtrl.setRoot(HomePage);
    }
}