import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user.class';
import { JsonResp } from './json-resp.class';

const baseurl = 'http://localhost:5000/users/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list(): Observable<JsonResp> {
    return this.http.get(baseurl + 'list') as Observable<JsonResp>;
  }

  get(id: number): Observable<JsonResp> {
    return this.http.get(baseurl + 'Get/' + id) as Observable<JsonResp>;
  }

  create(user: User): Observable<JsonResp> {
    return this.http.post(baseurl + 'Create', user) as Observable<JsonResp>;
  }

  edit(user: User): Observable<JsonResp> {
    return this.http.post(baseurl + 'Change', user) as Observable<JsonResp>;
  }

  delete(user: User): Observable<JsonResp> {
    return this.http.post(baseurl + 'Remove', user) as Observable<JsonResp>;
  }

  constructor( private http: HttpClient ) { }
}
