import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My CV';
  name: string = 'Matt Meyer';
  email: string = 'matthew.h.meyer@gmail.com';
  phone: string = '5132527744';
  address: string = '1234 Any St.';
  city: string = 'Cincinnati';
  state: string = 'OH';
  zip: number = 45238;
  goals: string = 'to do things good and stuff.';
}
