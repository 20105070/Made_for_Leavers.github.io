/*load.component.spec.ts - Daniel Syrén (20105070)*/
import { LoadComponent } from './load.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../http_service';
import { of } from 'rxjs';
import { University } from '../models/university';

describe('LoadComponent', () => {
  let component: LoadComponent;
  let fixture: ComponentFixture<LoadComponent>;
  const spy = jasmine.createSpyObj('HttpService', ['deleteUniversity', 'getUniversity', 'postUniversity']);
  spy.deleteUniversity.and.returnValue(of());
  spy.getUniversity.and.returnValue(of());
  spy.postUniversity.and.returnValue(of());

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadComponent],
      imports: [FormsModule],
      providers: [{ provide: HttpService, useValue: spy }]
    });
    fixture = TestBed.createComponent(LoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Use-case 3
  it('should load university from a database', () => {
    spy.getUniversity.calls.reset();
    component.loadUniversity();
    expect(spy.getUniversity).toHaveBeenCalled();
  });

  //Use-case 4
  it('should remove university from a database', () => {
    spy.deleteUniversity.calls.reset();
    var university = new University("National College of Ireland", "http://www.ncirl.ie/");
    component.removeUniversity(university.name);
    expect(spy.deleteUniversity).toHaveBeenCalledWith(university.name);
  });

});