import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
 
 about: string = 'Some Stuff to do with services';
  constructor(private http: HttpClient) { }
}
