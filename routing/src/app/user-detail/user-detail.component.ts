import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User;
  confirmDelete: boolean = false;

  confirm () {
    this.confirmDelete = true;
  }

  delete() {
    this.svc.delete(this.user)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl('/users/list');
      });
  }

  constructor( private svc: UserService,
               private route: ActivatedRoute,
               private router: Router) {}

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.svc.get(id)
    .subscribe(resp => {
      console.log(resp);
      this.user = resp.data;
    });
  }

}
