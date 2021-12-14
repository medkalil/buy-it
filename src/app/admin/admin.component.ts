import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Product } from '../core/product';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  products!: Product[];

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.products = this.adminService.getProducts();
  }

  onDelete(id: number) {
    this.adminService.deleteContactById(id);
  }
  onAdd() {
    this.router.navigate(['add']);
  }
}
