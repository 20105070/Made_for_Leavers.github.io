/*search.component.spec.ts - Daniel Syrén (20105070)*/
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../http_service';
import { of } from 'rxjs';
import { University } from '../models/university';
import { AuthService } from '../auth.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  const spyHttp = jasmine.createSpyObj('HttpService', ['postUniversity']);
  spyHttp.postUniversity.and.returnValue(of());
  const spyAuth = jasmine.createSpyObj('AuthService', [], { user$: of({ email: 'x20105070@student.ncirl.ie' }) });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [FormsModule],
      providers: [{ provide: HttpService, useValue: spyHttp },
      { provide: AuthService, useValue: spyAuth }
      ]
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Use-case 3
  it('should search country or city', fakeAsync(() => {
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

  //Use-case 4
  it('should save searched university', () => {
    spyHttp.postUniversity.calls.reset();
    var university = new University("x20105070@student.ncirl.ie", "National College of Ireland", "http://www.ncirl.ie/");
    component.saveUniversity(university);
    expect(spyHttp.postUniversity).toHaveBeenCalledWith(university);
  });

});