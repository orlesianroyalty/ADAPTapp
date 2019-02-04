
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html'
})
export class RoomsPage {
  
  rooms: Array<{name: string, type: string}>;

  constructor(public navCtrl: NavController) {


    this.rooms = [];
    this.rooms.push({
      name: "John's Kitchen",
      type: 'Kitchen'
    });


    this.rooms.push({
      name: "Rain's Office",
      type: 'Office'
    });

    this.rooms.push({
      name: "Bedroom 1",
      type: 'Bedroom'
    });

    this.rooms.push({
      name: "Guest Bedroom",
      type: 'Bedroom'
    });
  }

  ionViewDidLoad() {
    //do the setups here for view did load
  }

}
