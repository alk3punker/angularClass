import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BoolDisplayPipe } from './bool-display.pipe';
import { SortArrayJsonPipe } from './sort-array-json.pipe';
import { SearchJsonPipe } from './search-json.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BoolDisplayPipe,
    SortArrayJsonPipe,
    SearchJsonPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
