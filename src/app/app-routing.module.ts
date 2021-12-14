import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminComponent } from './admin/admin.component';
import { IsadminGuard } from './guards/isadmin.guard';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add', component: AddproductComponent },
  { path: 'admin', canActivate: [IsadminGuard], component: AdminComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'adminProduct/:id', component: ProductDetailComponent },
  { path: '**', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
