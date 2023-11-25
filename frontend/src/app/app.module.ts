import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LeanAuthModule } from "@lean/lean-auth";
import { environment } from '../environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeanAuthModule.forRoot({
      authApi: environment.apiUrl + 'auth',
      registerApi: environment.apiUrl + 'register',
      renewApi: environment.apiUrl + 'renew'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
