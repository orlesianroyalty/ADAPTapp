import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recommendation } from '../shared/recommendation';
import { SERVER_URL } from '../shared/environment';


@Injectable()

export class RecommendationsProvider {

  
  private apiUrl = SERVER_URL + '/api/';
  private recEndpoint = this.apiUrl+'recommendations';

  constructor(public http: HttpClient) {
  }

  //Gets a single recommendation based on id
  getRecommendation(recID: String) {
    return new Promise(resolve => {
      this.http.get<Recommendation>(this.recEndpoint + '/' + recID).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

}