import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginCover } from './login/login-cover.component';
import { Login } from './login/login.component';
import { Register } from './login/register.component';
import { LoginService } from './login/login.service';

import { Help } from './help/help.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    LoginCover,
    Login,
    Register,
    Help
  ],
  bootstrap: [AppComponent],
  providers: [LoginService]
})
export class AppModule { }
