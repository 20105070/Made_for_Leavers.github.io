/*app.module.ts - Daniel Syrén (20105070)*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes, RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AskComponent } from './ask/ask.component';
import { LoadComponent } from './load/load.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';

const appRoute: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Search', component: SearchComponent },
  { path: 'Ask', component: AskComponent },
  { path: 'Load', component: LoadComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent }
]

const firebaseConfig = {
  apiKey: "AIzaSyC2V-pwRIdOJuBj9nrmzLV0Rpk0YcSnIFA",
  authDomain: "madeforleavers.firebaseapp.com",
  projectId: "madeforleavers",
  storageBucket: "madeforleavers.appspot.com",
  messagingSenderId: "562391157664",
  appId: "1:562391157664:web:2ebcf134a2a768df19f2c5"
};

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AskComponent,
    LoadComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    RouterOutlet,
    RouterLink
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }