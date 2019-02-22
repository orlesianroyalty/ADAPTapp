import { CreateRoomPage } from './../create-room/create-room';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { RecommendsTabsPage } from '../recommends-tabs/recommends-tabs';

import {RoomModelPage} from './../room-model/room-model'
import {RoomType, Room} from './../../shared/roomsclass'

@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html'
})


export class RoomsPage {



  roomTypes: Array<{label: string, type: RoomType, show: boolean}>;

  rooms: Array<Room>;
  hideBedrooms: boolean = true;
  hideKitchens: boolean = true;
  hideBathrooms: boolean = true;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.rooms = [];
    this.roomTypes = [];
    this.roomTypes.push({label:"Bedrooms", type: RoomType.Bedroom, show: true})
    this.roomTypes.push({label:"bathrooms", type: RoomType.Bathroom, show: true})
    this.roomTypes.push({label:"LivingRooms", type: RoomType.Livingroom, show: true})
    this.roomTypes.push({label:"Kitchen", type: RoomType.Kitchen, show: true})
    var i = 0
    for(;i < 20; i++) {
      var room = new Room();
      room.roomID = i;
      room.name = "Room " + i;
      room.type = Math.floor(Math.random() * 5)+1;
      this.rooms.push(room);
    }
    console.log(this.roomTypes);
    console.log(this.rooms);
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
