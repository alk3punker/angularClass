import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { User} from '../user.class';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();

  save(): void {
    this.svc.create(this.user)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl('/users/list');
      });
  }

  constructor( private svc: UserService,
      private router: Router
    ) { }

  ngOnInit() {

  }

}
