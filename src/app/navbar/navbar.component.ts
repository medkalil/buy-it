import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isAdmin!: boolean;
  constructor(
    private router: Router,
    public authenticationService: AuthenticationService
  ) {}
  ngOnInit(): void {
    this.isAdmin = this.authenticationService.isAdmin;
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
}
