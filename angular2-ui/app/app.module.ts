import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LoginCover }  from './login/login-cover.component';
import { Login }  from './login/login.component';
import { Register }  from './login/register.component';
import { AppRoutingModule } from './app-routing.module';
import { Help } from './help/help.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginCover,
    Login,
    Register,
    Help
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
