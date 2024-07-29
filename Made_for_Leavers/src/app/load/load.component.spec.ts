/*load.component.spec.ts - Daniel Syrén (20105070)*/
import { LoadComponent } from './load.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../http_service';
import { of } from 'rxjs';
import { University } from '../models/university';
import { AuthService } from '../auth.service';

describe('LoadComponent', () => {
  let component: LoadComponent;
  let fixture: ComponentFixture<LoadComponent>;
  const spyHttp = jasmine.createSpyObj('HttpService', ['getUniversity', 'deleteUniversity']);
  spyHttp.getUniversity.and.returnValue(of());
  spyHttp.deleteUniversity.and.returnValue(of());
  const spyAuth = jasmine.createSpyObj('AuthService', [], { user$: of({ email: 'x20105070@student.ncirl.ie' }) });

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadComponent],
      imports: [FormsModule],
      providers: [{ provide: HttpService, useValue: spyHttp },
      { provide: AuthService, useValue: spyAuth }
      ]
    });
    fixture = TestBed.createComponent(LoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Use-case 6
  it('should load saved universities', () => {
    spyHttp.getUniversity.calls.reset();
    component.loadUniversity();
    expect(spyHttp.getUniversity).toHaveBeenCalled();
  });

  //Use-case 7
  it('should remove loaded university', () => {
    spyHttp.deleteUniversity.calls.reset();
    var university = new University("x20105070@student.ncirl.ie", "National College of Ireland", "http://www.ncirl.ie/");
    component.removeUniversity(university.name);
    expect(spyHttp.deleteUniversity).toHaveBeenCalledWith(university.email, university.name);
  });

});