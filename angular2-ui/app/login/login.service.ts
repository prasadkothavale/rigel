import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private serviceEndpoint = 'http://localhost:3002/api/login/';

  constructor(private http: Http) { }

  login(username: string, password: string): Promise<boolean> {
    let url = this.serviceEndpoint + 'login';
    let body = { 'username': username, 'password': password };
    return this.http.post(url, JSON.stringify(body), { headers: this.headers })
      .toPromise().then(response => response.json() as boolean)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error accurred', error);
    return Promise.reject(error.message || error);
  }
}
