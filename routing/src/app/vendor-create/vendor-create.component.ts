import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { VendorService } from '../vendor-service.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor();

  save(): void {
    this.svc.create(this.vendor)
      .subscribe(resp => {
        console.log(resp);
        this.router.navigateByUrl('/vendors/list');
      });
  }

  constructor( private svc: VendorService,
    private router: Router) { }

  ngOnInit() {
  }

}
