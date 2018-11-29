import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'users/list', component: UserListComponent},
  {path: 'users/create', component: UserCreateComponent},
  {path: 'users/edit/:id', component: UserEditComponent},
  {path: 'users/details/:id', component: UserDetailComponent},
  {path: 'vendors/list', component: VendorListComponent},
  {path: 'vendors/create', component: VendorCreateComponent},
  {path: 'vendors/edit/:id', component: VendorEditComponent},
  {path: 'vendors/details/:id', component: VendorDetailComponent},
  {path: 'home', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
