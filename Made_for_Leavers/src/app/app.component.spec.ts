/*app.component.spec.ts - Daniel Syrén (20105070)*/
import { AppComponent } from './app.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { AuthService } from './auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    const spyAuth = jasmine.createSpyObj('AuthService', ['logout', 'currentUserSig'], { user$: of({ email: 'x20105070@student.ncirl.ie' }) });
    spyAuth.logout.and.returnValue(of());

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [FormsModule, HttpClientTestingModule, ReactiveFormsModule, RouterTestingModule],
            providers: [{ provide: AuthService, useValue: spyAuth }
            ]
        });
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    //Use-case 8
    it('should logout', () => {
        spyAuth.logout.calls.reset();
        component.logout();
        expect(spyAuth.logout).toHaveBeenCalled();
    });

});