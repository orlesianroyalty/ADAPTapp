import { CreateRoomPage } from './../create-room/create-room';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { RecommendsTabsPage } from '../recommends-tabs/recommends-tabs';

import {RoomModelPage} from './../room-model/room-model'



export enum RoomType {
  Bedroom = 1,
  Bathroom = 2,
  Livingroom = 3,
  Office = 4,
  Kitchen = 5
}


@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html'
})


export class RoomsPage {



  roomTypes: Array<{type: RoomType, show: boolean}>;

  rooms: Array<{name: string, type: string}>;
  hideBedrooms: boolean = true;
  hideKitchens: boolean = true;
  hideBathrooms: boolean = true;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.rooms = [];



  // this.rooms.push({
  //  name: "John's Kitchen",
  // type: 'Kitchen'
  // });


   // this.rooms.push({
   //   name: "Rain's Office",
   //   type: 'Office'
   // });

  //  this.rooms.push({
  //    name: "Bedroom 1",
  //    type: 'Bedroom'
  //  });

  //  this.rooms.push({
  //    name: "Guest Bedroom",
  //    type: 'Bedroom'
  //  });
  }

  createRoom() {
    const modal = this.modalCtrl.create(CreateRoomPage);
    modal.present();
  }

  goToRoomDetail(selectedRoom) {
    this.navCtrl.push(RoomModelPage, {
      room: selectedRoom
    });
  }

  ionViewDidLoad() {
    //do the setups here for view did load
  }



}
