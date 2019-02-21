import { Resident } from './../../shared/residentsclass';
import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-resident-create',
  templateUrl: 'create-resident.html' 
})
export class CreateResidentPage {
    newRes: Resident;
    physConcerns: any[];
    incomes: string[];
    states: string[];

  constructor(public navCtrl: NavController, public viewCtrl:ViewController) {
    this.instantiateNewVars();
  }

  create() {
      this.dismiss();
  }

  dismiss() {
      this.viewCtrl.dismiss();
  }

  ionViewDidLoad() {
    //do the setups here for view did load
  }

  /* 
   * instantiateNewVars()
   * Instantiates empty variables for a new resident, the list of physical concerns, and the list of incomes.
   */
  instantiateNewVars() {
    this.newRes = new Resident();
    this.physConcerns = [];
    this.incomes = [];
    this.states = [];
  }
}