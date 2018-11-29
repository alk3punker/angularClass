import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationListComponent } from './education-list/education-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkExperienceComponent,
    EducationListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
