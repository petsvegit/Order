import { Injectable } from '@angular/core';
import {Headers, Response, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {

private kitchenUrl = 'http://localhost:8508/api/kitchen';
private headers = new Headers({'Content-Type': 'application/json'});


constructor(private http: Http) { }
 
getMeals(): Promise<String[]> {
  return this.http.get(this.kitchenUrl)
             .toPromise()
             .then(response => response.json() as String[])
             .catch(this.handleError);
}


private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); 
  return Promise.reject(error.message || error);
}

}