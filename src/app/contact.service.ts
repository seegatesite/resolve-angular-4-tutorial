import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ContactService {
  
  constructor(private http: Http) {
   
  }
   
  getContacts(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(url, { })
      .map(
      res => {
        return res.json();
      },
      err => {
        return err;
      }
      )
  }
  getContactDetail(id): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/users/'+id;
    return this.http.get(url, { })
      .map(
      res => {
        return res.json();
      },
      err => {
        return err;
      }
      )
  }
}
