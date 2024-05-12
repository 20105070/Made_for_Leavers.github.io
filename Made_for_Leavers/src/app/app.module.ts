/*app.module.ts - Daniel Syrén (20105070)*/
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AskComponent } from './ask/ask.component';
import { LoadComponent } from './load/load.component';
import { HttpClientModule } from '@angular/common/http';

const appRoute: Routes = [
  { path: '', component: SearchComponent },
  { path: 'Search', component: SearchComponent },
  { path: 'Ask', component: AskComponent },
  { path: 'Load', component: LoadComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AskComponent,
    LoadComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }