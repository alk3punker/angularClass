import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';

import { VendorService } from '../vendor-service.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor;
  confirmDelete: boolean = false;

  confirm () {
    this.confirmDelete = true;
  }

  delete() {
    this.svc.delete(this.vendor)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl('/vendors/list');
      });
  }

  constructor(private svc: VendorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.svc.get(id)
    .subscribe(resp => {
      console.log(resp);
      this.vendor = resp.Data;
    });
  }

}
