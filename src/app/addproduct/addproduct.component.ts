import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Product } from '../core/product';
import { Size } from '../core/size';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss'],
})
export class AddproductComponent implements OnInit {
  flavors: any[] = [];
  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit(): void {}

  onProductList() {
    this.router.navigate(['admin']);
  }
  onSubmit(form: NgForm) {
    this.flavors.push({ name: form.value.name1, color: form.value.color1 });
    this.flavors.push({ name: form.value.name2, color: form.value.color2 });
    this.flavors.push({ name: form.value.name3, color: form.value.color3 });

    let product: Product = {
      id: -1,
      name: form.value['name'],
      imageUrls: [
        '../assets/gelato-chocolate.png',
        '../assets/gelato-vanelle.png',
      ],
      price: form.value['price'],
      flavors: this.flavors,
      sizes: [Size.SMALL, Size.MEDIUM, Size.LARGE],
    };

    this.adminService.addProduct(product);
    console.log(product);
    this.router.navigate(['admin']);
    //console.log(this.flavors);
    //console.log(form.value);
  }
}
