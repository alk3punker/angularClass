import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  constructor() { }

  jobs: WorkExperience[];

  ngOnInit() {
    let we1 = new WorkExperience();
    let we2 = new WorkExperience();
    we1.company = 'GCWW';
    we1.title = 'Computer Systems Analyst';
    we1.years = '2008-Present';
    we1.activities = ['Developed .Net Apps','Kicked Ass.','Crushed it daily.'];
    we2.company = 'Cincinnati Insurance Company';
    we2.title = 'Senior Systems Analyst';
    we2.years = '2004-2008';
    we2.activities = [ 'Supported many Apps', 'Kicked Ass.','Crushed it daily.'];
    this.jobs = [we1, we2];
  }

}

export class  WorkExperience {
  company: string;
  title: string;
  years: string;
  activities: string[];
}

