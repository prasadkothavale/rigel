import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'login-cover',
  templateUrl: 'app/login/login-cover.template.html',
  styleUrls: [
        'app/theme/css/cover.css'
    ],
    encapsulation: ViewEncapsulation.None,
})
export class LoginCover  {

  public static showLogin = true;

  public toggleLogin(): void {
    LoginCover.showLogin = (!LoginCover.showLogin);
  }

  public get showLogin() {
    return LoginCover.showLogin;
  }
}
