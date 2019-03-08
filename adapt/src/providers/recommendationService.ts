import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable()

export class RecommendationsProvider {

    private apiUrl = 'http://localhost:8080/api/';
    private houseEndpoint = this.apiUrl+'recommendations';

	constructor(public http: HttpClient) {
    }

    getRecommendations(userID: String) {
        return new Promise(resolve => {
          this.http.get(this.apiUrl+'houses').subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
      }

  }