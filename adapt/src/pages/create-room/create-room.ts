import { Room } from './../../shared/classes';
import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-rooms-create',
  templateUrl: 'create-room.html'
})
export class CreateRoomPage {
    roomTypes: string[];
    newRoom: Room;

  constructor(public navCtrl: NavController, public viewCtrl:ViewController) {
    this.roomTypes = ['Bedroom', 'Bathroom', 'Kitchen'];
    this.newRoom = new Room();
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

}