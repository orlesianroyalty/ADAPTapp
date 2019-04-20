import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../shared/roomsclass';
import { Recommendation } from '../shared/recommendation';
import { SERVER_URL } from '../shared/environment';
import { map } from 'rxjs/operators';


@Injectable()

export class RoomsProvider {

  private apiUrl = SERVER_URL + '/api/';
  private roomEndpoint= this.apiUrl+'rooms';

	constructor(public http: HttpClient) {
  }

  getRoomsFor(houseID: number) {
    var url = this.apiUrl + '/houses/' + houseID + '/rooms';
    return this.http.get<any[]>(url).pipe(map((data) => {
      return data.map( room => new Room(room)); 
      
    }));
  }

  create(userID: number, roomData:Room) {
    return new Promise(resolve => {
      var data = {...roomData.toNetworkJSON(), userId:userID}
      console.log(roomData)
      this.http.post(this.roomEndpoint,data ).subscribe(data => {
        
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  update(residentID: number, roomData:Room) {
    return new Promise(resolve => {
      var data = {...roomData.toNetworkJSON()}
      console.log(roomData)
      this.http.put(this.roomEndpoint + '/' + residentID, data).subscribe(data => {
        
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  delete(residentID: number) {
    return new Promise(resolve => {
      this.http.delete(this.roomEndpoint + '/' + residentID,).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}