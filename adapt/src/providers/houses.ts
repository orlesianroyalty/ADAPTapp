import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';


export class HousesProvider {

    private apiUrl = 'https://oururls/api/';

	constructor(public http: HttpClient) {

    }

	getHouses(userID: String) : Observable<[String]> {
        return this.http.get(this.apiUrl).catch(this.handleError);
    }
      
    
    addResidents(houseID: String, residentID: [String]){
        return this.http.get(this.apiUrl).catch(this.handleError);
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
          const err = error || '';
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
      }

}