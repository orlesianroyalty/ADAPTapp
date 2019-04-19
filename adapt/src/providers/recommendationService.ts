import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recommendation } from '../shared/recommendation';
import { SERVER_URL } from '../shared/environment';
import { map } from 'rxjs/operators';


@Injectable()

export class RecommendationsProvider {

  
  private apiUrl = SERVER_URL + '/api/';
  private recEndpoint = this.apiUrl+'recommendations';

  constructor(public http: HttpClient) {
  }

  //Gets a single recommendation based on id
  getRecommendation(recID: String) {
    return this.http.get<Recommendation>(this.recEndpoint + '/' + recID).pipe( map((data) => {
      return new Recommendation (data);
    }));
  }
      

}