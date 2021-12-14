import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public authenticationService: AuthenticationService) {}
  isAdmin!: boolean;
  email: string | any;
  password: string | any;

  ngOnInit(): void {}

  async signIn() {
    await this.authenticationService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  async signUp() {
    await this.authenticationService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
  }

  async signOut() {
    await this.authenticationService.SignOut();
    this.isAdmin = false;
    this.authenticationService.isAdmin = this.isAdmin;
  }
}
