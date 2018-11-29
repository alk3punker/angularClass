import { Component, OnInit } from '@angular/core';
import { SystemService } from './system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Counter';
  counter: number;
  classes: string;
  constructor( private sys: SystemService) { }

  increment(): void { this.counter++;
                      this.checkDisplays(); }
  decrement(): void { this.counter--;
                      this.checkDisplays(); }
  ngOnInit() { this.counter = 0;
               }

  checkDisplays() {
    this.classes = '';
    if (this.counter % 2 === 0) {
      this.classes = this.classes + 'isRed '; }
    if (this.counter % 3 === 0) {
        this.classes = this.classes + 'isItalic '; }
    if (this.counter % 7 === 0) {
          this.classes = this.classes + 'isBold '; }
  }
}
