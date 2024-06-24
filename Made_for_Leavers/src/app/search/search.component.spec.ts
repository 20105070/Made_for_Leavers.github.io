/*search.component.spec.ts - Daniel Syrén (20105070)*/
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../http_service';
import { of } from 'rxjs';
import { University } from '../models/university';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  const spy = jasmine.createSpyObj('HttpService', ['deleteUniversity', 'getUniversity', 'postUniversity']);
  spy.deleteUniversity.and.returnValue(of());
  spy.getUniversity.and.returnValue(of());
  spy.postUniversity.and.returnValue(of());

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule],
      providers: [{ provide: HttpService, useValue: spy }]
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Use-case 1
  it('should display universities by country/city and open link to university website', fakeAsync(() => {
    var jsonRes: any[] = [
      {
        web_pages: "http://www.ncirl.ie/",
        domains: "ncirl.ie",
        country: "Ireland",
        name: "National College of Ireland",
        state_province: "Leinster",
        alpha_two_code: "IE"
      }
    ]
    component.displayUniversity(jsonRes);
    expect(component.universities[0].name).toEqual("National College of Ireland");
  }));

  //Use-case 2
  it('should store university in a database', () => {
    spy.postUniversity.calls.reset();
    var university = new University("National College of Ireland", "http://www.ncirl.ie/");
    component.saveUniversity(university);
    expect(spy.postUniversity).toHaveBeenCalledWith(university);
  });

});