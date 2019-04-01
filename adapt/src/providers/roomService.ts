import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from '../shared/roomsclass';
import { Recommendation } from '../shared/recommendation';
import { SERVER_URL } from '../shared/environment';


@Injectable()

export class RoomsProvider {

  private apiUrl = SERVER_URL + '/api/';
  private roomEndpoint= this.apiUrl+'rooms';

	constructor(public http: HttpClient) {
  }

    getRecommendationsFor(roomID: number) {
      return new Promise(resolve => {
        this.http.get<Recommendation[]>(this.roomEndpoint + '/' + roomID + "/getRecommendations").subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
    }

    getRoomsFor(houseID: number) {
      return new Promise<Room[]>(resolve => {
        //TODO:update this to add filter object for user id or update server to support lookup
        var url = this.apiUrl + '/houses/' + houseID + '/rooms';
        this.http.get<Room[]>(url).subscribe(data => {
          console.log(data);//TODO: data is not actually  casted to House type
          resolve(data);
        }, err => {
          console.log(err);
        });
      });
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