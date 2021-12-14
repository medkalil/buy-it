import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Product } from '../core/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  idContact: any;
  product!: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((res) => {
      this.idContact = res.get('id');
    });
    this.product = this.adminService.getProductById(this.idContact);
  }

  onProductList() {
    this.router.navigate(['admin']);
  }
}
