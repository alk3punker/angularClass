import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Vendor } from './vendor.class';
import { JsonVResp } from './json-vresp.class';

const baseurl = 'http://purchase-request-server.azurewebsites.net/api/vendors/';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  list(): Observable<JsonVResp> {
    return this.http.get(baseurl + 'list') as Observable<JsonResp>;
  }

  get(id: number): Observable<JsonVResp> {
    return this.http.get(baseurl + 'Get/' + id) as Observable<JsonResp>;
  }

  create(vendor: Vendor): Observable<JsonVResp> {
    return this.http.post(baseurl + 'Create', vendor) as Observable<JsonResp>;
  }

  edit(vendor: Vendor): Observable<JsonVResp> {
    return this.http.post(baseurl + 'Change', vendor) as Observable<JsonResp>;
  }

  delete(vendor: Vendor): Observable<JsonVResp> {
    return this.http.post(baseurl + 'Remove', vendor) as Observable<JsonResp>;
  }

  constructor( private http: HttpClient ) { }
}
