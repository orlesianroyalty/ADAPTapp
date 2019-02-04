import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-residents',
  templateUrl: 'residents.html'
})
export class ResidentsPage {

  names: string[];
  residents: Array<{name: string}>;

  constructor(public navCtrl: NavController) {
    this.names = ['Rain', 'JR', 'Michelle', 'Sam', 'Seth']
    this.residents = [];
    for (let i = 1; i < this.names.length; i++) {
      this.residents.push({
        name: this.names[i]
      });
    }
  }

}
