import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { BoolPipe } from './bool.pipe';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    UserCreateComponent,
    BoolPipe,
    VendorListComponent,
    VendorCreateComponent,
    VendorEditComponent,
    VendorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
