/*load.component.ts - Daniel Syrén (20105070)*/
import { Component, inject, OnInit } from '@angular/core';
import { HttpService } from '../http_service';
import { University } from '../models/university';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-load',
  templateUrl: './load.component.html'
})
export class LoadComponent implements OnInit {
  universities: University[];

  /*constructor(private httpService: HttpService) injects httpService and initialises declared variables.*/
  constructor(private httpService: HttpService) {
    this.universities = [];
  }
  authService = inject(AuthService);

  /*loadUniversity() receives universities from http and calls a method of http_service.ts, and assigns the value of universities.*/
  loadUniversity() {
    this.authService.user$.subscribe((user) => {
      if (user && user.email) {
        this.httpService.getUniversity(user.email).subscribe((universities: University[]) => {
          this.universities = universities;
        });
      }
    });
  }

  /*ngOnInit() runs loadUniversity() when the load component is initialised.*/
  ngOnInit(): void {
    this.loadUniversity();
  }

  /*removeUniversity(name: string) receives name, calls a method of http_service.ts, and reloads saved universities.*/
  removeUniversity(name: string) {
    this.authService.user$.subscribe((user) => {
      if (user && user.email) {
        this.httpService.deleteUniversity(user.email, name).subscribe(() => {
          this.loadUniversity();
        });
      }
    });
  }

}