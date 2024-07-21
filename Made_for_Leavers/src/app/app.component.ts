/*app.component.ts - Daniel Syrén (20105070)*/
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Made_for_Leavers';
  authService = inject(AuthService);
  router = inject(Router);

  /*ngOnInit() checks if user is logged-in when the app component is initialised.*/
  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      if (user) {
        this.authService.currentUserSig.set({
          email: user.email!,
        })
      } else {
        this.authService.currentUserSig.set(null);
      }
      console.log(this.authService.currentUserSig());
    });
  }

  /*logout() logs-out user and navigates to login page.*/
  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

}
