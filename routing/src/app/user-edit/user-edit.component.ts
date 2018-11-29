import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';

import { UserService } from '../user.service';
import { User} from '../user.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User();

  save(): void {
    this.svc.edit(this.user)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl('/users/list');
      });
  }

  constructor(private svc: UserService,
    private router: Router,
    private route: ActivatedRoute ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.svc.get(id)
    .subscribe(resp => {
      console.log(resp);
      this.user = resp.data;
    });
  }

}
