/*load.component.ts - Daniel Syrén (20105070)*/
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http_service';
import { University } from '../models/university';

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

  /*delete(name: string) receives name, calls a method of http_service.ts, and reloads saved universities.*/
  delete(name: string) {
    this.httpService.deleteUniversity(name).subscribe(() => {
      this.load();
    });
  }

  /*load() receives universities from http and calls a method of http_service.ts, and assigns the value of universities.*/
  load() {
    this.httpService.getUniversities().subscribe((universities: University[]) => {
      this.universities = universities;
    });
  }

  /*ngOnInit() runs load() when the load component is initialised.*/
  ngOnInit(): void {
    this.load();
  }

}