import { CreateRoomPage } from './../create-room/create-room';
import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { RecommendsTabsPage } from '../recommends-tabs/recommends-tabs';
import { RoomsProvider } from '../../providers/roomService';
import { Room} from '../../shared/roomsclass';

@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html'
})
export class RoomsPage {

  rooms: Room[];
  hideBedrooms: boolean = true;
  hideKitchens: boolean = true;
  hideBathrooms: boolean = true;
  houseID: number;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    public navParams: NavParams,
    public roomsProvider: RoomsProvider, ) {
      this.houseID  = navParams.get('houseId');
  }

  getRooms(){
    this.roomsProvider.getRoomsFor(this.houseID).subscribe(rooms => {
      this.rooms = rooms;
      console.log(rooms);
    })
  }

  createRoom() {
    const modal = this.modalCtrl.create(CreateRoomPage);
    modal.present();
  }

  ionViewDidLoad() {
    //do the setups here for view did load
  }



}
