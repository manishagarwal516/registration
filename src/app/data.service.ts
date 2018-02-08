import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';


@Injectable()
export class DataService {
	dataurl: string = "http://localhost:3000";
  	constructor(private http: Http) { }

	createUser(userData){
		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');
  		let opts = new RequestOptions();
  		opts.headers = headers;
		return this.http.post(this.dataurl + '/user/register' ,userData,opts)
			.map((response: Response) => {
			   	return response.json();
		   	})
		.catch(this.handleError);
	}

	validateUser(userData){
		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');
  		let opts = new RequestOptions();
  		opts.headers = headers;

		return this.http.post(this.dataurl + '/user/login' ,userData,opts)
			.map((response: Response) => {
			   	return response.json();
		   	})
		.catch(this.handleError);
	}

	resetPassword(userData, authToken){
		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');
  		let opts = new RequestOptions();
  		opts.headers = headers;
  		var data = {
  			password: userData.password,
  			verificationUUID: authToken
  		}
		return this.http.post(this.dataurl + '/user/resetPass' ,data,opts)
			.map((response: Response) => {
			   	return response.json();
		   	})
		.catch(this.handleError);
	}

	handleError(error: any) {
		console.log('server error:', error); 
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json().error;
          } catch(err) {
            errMessage = error.statusText;
          }
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
	}
}
