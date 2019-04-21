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
    newResident: Resident = new Resident();
    userID: number;

    physConcerns: Array<{label: string, value: number}>;
    incomes : Array<{label: string, value: number}>;
    states: String[];
    genders: Array<{label: string, value: number}>;

  constructor(public navCtrl: NavController,
              public residentProvider: ResidentProvider,
              public userSession: UserProvider,
              public viewCtrl:ViewController) {
    this.instantiateNewVars();
    this.userID = userSession.user.userId;
    
  }

  create() {
    console.log(this.newResident.toNetworkJSON());
    // var newRes = new Resident({
    //   name:this.name,
    //   id: 0,//THis will be ignored by the
    //   age: Number(this.resAge),
    //   gender:Number(this.resGender),
    //   concerns: this.parseConcerns(this.resConcerns),
    //   income:Number(this.resIncome),
    //   state: Number(this.resState)
    // })
    //console.log(newRes.toNetworkJSON());
    this.residentProvider.create(this.userID,this.newResident)
     .then( data => {
      console.log(data);
      this.dismiss();
    });
  }

  parseConcerns(resConcerns){
    return [1,2]
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
    this.genders = [{label: "Male", value: 0},
                      {label: "Female", value: 1},
                    {label: "Other", value: 2}];
    this.states = [
      'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
      'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
      'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
      'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
      'VT','VI','VA','WA','WV','WI','WY'
     ];
    this.incomes = [{label: "<30k", value: 0},
                    {label: "30k~60k", value: 1},
                    {label: "60k+", value: 2}];
    this.physConcerns = [{label: "Wheelchair", value: 0},
                    {label: "Blindness", value: 1},
                    {label: "Speech impairment", value: 2},
                    {label: "Deaf", value: 3}
                  ];
  }
}