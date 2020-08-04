import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // constructor() { }

  // base: string = 'https://lifestoryshare.herokuapp.com/'; //live url
  base: string = 'http://localhost:6025/';  // localhost
  constructor(public http: HttpClient) { }

  login(data: Object) {
    return this.post('users/login', data);
  }

  createQuest(data: Object) {
    return this.post('quest/createquest', data);
  }
  listQuest(data: Object) {
    return this.post('quest/viewquest', data);
  }

  post(url: string, params: any) {
    const data = (params);
    let headers: any = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.base + url, data, headers)
      .toPromise()
      .then((res: any) => {
        if (res.data == 'Invalid token' || res.data == 'Token expired') {
          window.location.assign('')
        } else {
          return res
        }
      })
      .catch()
  }
  get(url) {
    let headers: any = new HttpHeaders();
    return this.http.get(this.base + url, headers).toPromise().then().catch(err => console.log(err));
  }



  loginPost(params: any) {
    const data = params;

    return this.http.post('https://lifestoryshare.com/wp-json/jwt-auth/v1/token', data)
      .toPromise()
      .then()
      .catch()
  }


}
