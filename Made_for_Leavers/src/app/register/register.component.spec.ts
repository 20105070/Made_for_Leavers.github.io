/*register.component.spec.ts - Daniel Syrén (20105070)*/
import { RegisterComponent } from './register.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  const spyAuth = jasmine.createSpyObj('AuthService', ['register'], { user$: of({ email: 'x20105070@student.ncirl.ie' }) });
  spyAuth.register.and.returnValue(of());

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [FormsModule, HttpClientTestingModule, ReactiveFormsModule],
      providers: [{ provide: AuthService, useValue: spyAuth }
      ]
    });
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //Use-case 1
  it('should register email and password', () => {
    spyAuth.register.calls.reset();
    component.form = component.fb.nonNullable.group({
      email: ['x20105070@student.ncirl.ie'],
      password: ['20105070'],
    });
    component.onSubmit();
    expect(spyAuth.register).toHaveBeenCalledWith('x20105070@student.ncirl.ie', '20105070');
  });

});