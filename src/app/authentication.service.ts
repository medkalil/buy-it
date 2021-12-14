import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService implements OnInit {
  userData: Observable<firebase.User | null>;
  isAdmin: boolean = JSON.parse(localStorage.getItem('isAdmin')!);

  constructor(public angularFireAuth: AngularFireAuth, private router: Router) {
    this.userData = angularFireAuth.authState;
  }
  ngOnInit(): void {
    this.isAdmin = JSON.parse(localStorage.getItem('isAdmin')!);
  }

  /* Sign in */
  async SignIn(email: string, password: string) {
    await this.angularFireAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('email', JSON.stringify(res.user?.email));
        console.log('you re in');
        if (res.user?.email == 'admin@gmail.com') {
          localStorage.setItem('isAdmin', 'true');
          this.isAdmin = JSON.parse(localStorage.getItem('isAdmin')!);
          /*          const va = JSON.parse(localStorage.getItem('isAdmin')!);
          alert(typeof va); */
          //this.isAdmin = true;
          this.router.navigate(['admin']);
        } else {
          //this.isAdmin = false;
          this.router.navigate(['/']);
        }
      })
      .catch((err) => {
        console.log('Something went wrong:', err.message);
        alert(err.message);
      });
  }

  /* Sign up */
  async SignUp(email: string, password: string) {
    await this.angularFireAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.user));
        localStorage.setItem('email', JSON.stringify(res.user?.email));
        console.log('You are Successfully signed up!', res);
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.log('Something is wrong:', error.message);
        alert(error.message);
      });
    this.isAdmin = false;
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth.auth.signOut();
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    localStorage.removeItem('isAdmin');
  }
}
