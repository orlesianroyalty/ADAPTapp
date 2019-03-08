import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SERVER_URL } from '../shared/environment';


@Injectable()

export class RecommendationsProvider {

    
    private apiUrl = SERVER_URL + '/api/';
    private recEndpoint = this.apiUrl+'recommendations';

	constructor(public http: HttpClient) {
    }

    getRecommendations(userID: String) {
        return new Promise(resolve => {
          this.http.get(this.recEndpoint).subscribe(data => {
            resolve(data);
          }, err => {
            console.log(err);
          });
        });
      }

  }