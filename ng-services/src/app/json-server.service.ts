import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';
import { Json } from './json.class';

@Injectable({
  providedIn: 'root'
})
export class JsonServerService {

  json: Json[] = [{id: 1, name: 'Greg', role: 'instructor',gcwwe: false},
  {id: 2, name: 'Matt', role: 'student', gcwwe: true},
  {id: 3, name: 'Dominik', role: 'student', gcwwe: true},
  {id: 4, name: 'Kelsey', role: 'student instructor', gcwwe: false}];

  get(): Observable<Json[]> {
      return of(this.json) as Observable<any>;
  }

  constructor() { }
}
