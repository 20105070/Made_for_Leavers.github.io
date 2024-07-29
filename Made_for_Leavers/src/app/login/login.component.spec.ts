/*login.component.spec.ts - Daniel Syrén (20105070)*/
import { LoginComponent } from './login.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const spyAuth = jasmine.createSpyObj('AuthService', ['login'], { user$: of({ email: 'x20105070@student.ncirl.ie' }) });
  spyAuth.login.and.returnValue(of());

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, HttpClientTestingModule, ReactiveFormsModule],
      providers: [{ provide: AuthService, useValue: spyAuth }
      ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Use-case 2
  it('should login with email and password', () => {
    spyAuth.login.calls.reset();
    component.form = component.fb.nonNullable.group({
      email: ['x20105070@student.ncirl.ie'],
      password: ['20105070'],
    });
    component.onSubmit();
    expect(spyAuth.login).toHaveBeenCalledWith('x20105070@student.ncirl.ie', '20105070');
  });

});