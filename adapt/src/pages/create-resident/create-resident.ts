import { Resident } from './../../shared/residentsclass';
import { Component , Input } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { ResidentProvider } from '../../providers/residentService' 
import { UserProvider } from '../../providers/userService';


@Component({
  selector: 'page-resident-create',
  templateUrl: 'create-resident.html' 
})
//TODO: create enum for the physical concerns, then create a drop down
//in html to map this enum type and enable multi select
export class CreateResidentPage {
    userID: number;
    newRes: Resident;
    physConcerns: Array<{label: string, value: number}>;
    incomes : Array<{label: string, value: number}>;
    states: String[];

  constructor(public navCtrl: NavController,
    public residentProvider: ResidentProvider,
    public userSession: UserProvider,
      public viewCtrl:ViewController) {
    this.instantiateNewVars();
    this.userID = userSession.user.userId;
    
  }

  create() {
    this.residentProvider.create(this.userID, this.newRes)
     .then( data => {
      console.log(data);
      this.dismiss();
    });
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
    this.states = ["Alabama", "Georgia", "Tennessee", "Florida"];
    this.incomes = [{label: "<30k", value: 0},
                    {label: "30k~60k", value: 1},
                    {label: "60k+", value: 2}];
    this.physConcerns = [{label: "Wheelchair", value: 0},
                    {label: "Blindness", value: 1},
                    {label: "Manual Dexterity", value: 2}];
  }
}