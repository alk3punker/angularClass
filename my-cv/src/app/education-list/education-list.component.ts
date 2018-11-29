import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'education-list',
  templateUrl: './education-list.component.html',
  styleUrls: ['./education-list.component.css']
})
export class EducationListComponent implements OnInit {

  constructor() { }

  educationList: EducationItem[];

  ngOnInit() {
    let ei1 = { school: 'University of Notre Dame', degree: 'BS', major: 'Mathematics and CS', grad: '2004' };
    let ei2 = { school: 'Elder High School', degree: 'HS Diploma', major: 'Being Awesome', grad: '2000' };
    this.educationList = [ei1, ei2];
  }

}

export class EducationItem {
  school: string;
  degree: string;
  major: string;
  grad: string;
}
