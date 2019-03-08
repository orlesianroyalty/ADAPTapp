import { CreateResidentPage } from './../create-resident/create-resident';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {ResidentProvider} from './../../providers/residentService'
import { Resident } from "./../../shared/residentsclass"

@Component({
  selector: 'page-residents',
  templateUrl: 'residents.html'
})
export class ResidentsPage {

  names: string[];
  userID = 1;
  residents: Array<{name: string}>;
  residentsObjects : Resident[];

  constructor(public navCtrl: NavController, public residentProvider: ResidentProvider, public modalCtrl: ModalController) {
    this.names = ['Rain', 'JR', 'Michelle', 'Sam', 'Seth']
    this.residents = [];
    for (let i = 1; i < this.names.length; i++) {
      this.residents.push({
        name: this.names[i]
      });
    }
  }


  ionViewWillEnter(){
    this.getResidents();
  }

  getResidents(){
    this.residentProvider.getResidents(this.userID)
    .then( data  => {
        this.residentsObjects = data;
        console.log(data);
    });
  }

  goToCreate() {

    const modal = this.modalCtrl.create(
      CreateResidentPage,
       {'userID': this.userID}
    );
    modal.onDidDismiss(data => {
      this.getResidents();
      //console.log(data);
    });
    modal.present();
  }

}
