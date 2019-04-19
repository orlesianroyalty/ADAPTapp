import { CreateResidentPage } from './../create-resident/create-resident';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {ResidentProvider} from './../../providers/residentService'
import { Resident } from "./../../shared/residentsclass"
import { UserProvider } from '../../providers/userService';

@Component({
  selector: 'page-residents',
  templateUrl: 'residents.html'
})
export class ResidentsPage {

  names: string[];
  userID: number;
  residents : Resident[];

  constructor(public navCtrl: NavController, public residentProvider: ResidentProvider, 
    public userSession: UserProvider,
    public modalCtrl: ModalController) {
    this.userID = userSession.user.userId;
  }


  ionViewWillEnter(){
    this.getResidents();
  }

  getResidents(){
    this.residentProvider.getResidents(this.userID).subscribe(data =>{
      this.residents = data;
      console.log(data);
    });
  }

  editResident(resident){
    this.residentProvider.update(resident.id, resident).subscribe(()=>{
      this.getResidents();
    })
  }

  deleteResident(resident){
    this.residentProvider.delete(resident.id).subscribe(()=>{
      this.getResidents();
    })
  }

  goToCreate() {

    const modal = this.modalCtrl.create(
      CreateResidentPage
    );
    modal.onDidDismiss(data => {
      this.getResidents();
      //console.log(data);
    });
    modal.present();
  }

}
