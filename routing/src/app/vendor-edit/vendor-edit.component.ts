import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';

import { VendorService } from '../vendor-service.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor: Vendor = new Vendor();

  save(): void {
    this.svc.edit(this.vendor)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl('/vendors/list');
      });
  }

  constructor( private svc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.svc.get(id)
    .subscribe(resp => {
      console.log(resp);
      this.vendor = resp.Data;
    });
  }

}
