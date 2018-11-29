import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world2';

  name = 'Click to Say My Name';

  SayName(): void {
    this.name = 'Matt';
  }
}
