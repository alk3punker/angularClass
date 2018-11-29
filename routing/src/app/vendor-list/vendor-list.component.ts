import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor-service.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[];

  constructor( private svc: VendorService ) {  }

  ngOnInit() {
    this.svc.list()
    .subscribe( resp => {
      console.log(resp);
      this.vendors = resp.Data;
      console.log(this.vendors);
    });
  }

}
