import { Component } from '@angular/core';
import {JsonServerService} from './json-server.service';
import { Json } from './json.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-services';

  sortCol = 'name';
  searchCriteria: string = '';

  json: Json[];

  constructor(private jsonsvc: JsonServerService) {
    this.jsonsvc.get()
      .subscribe(resp => {
        this.json = resp;
        console.log(resp);
      },
      err => {
        console.error(err);
      }
    );
  }
}
