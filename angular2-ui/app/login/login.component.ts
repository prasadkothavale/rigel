import { Component, trigger, state, style, animate, transition, group } from '@angular/core';
import { LoginCover } from './login-cover.component';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: 'app/login/login.template.html',
  animations: [
    trigger('flyInOut', [
      state('in', style({ width: '100%', transform: 'translateX(0)', opacity: 1 })),
      transition('void => *', [
        style({ width: '40%', transform: 'translateX(50px)', opacity: 0 }),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: '100%'
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class Login {

  username: string;
  password: string;

  constructor(
    private loginService: LoginService
  ) { }

  public toggleLogin(): void {
    LoginCover.showLogin = (!LoginCover.showLogin);
  }

  public login(): void {
    let response = this.loginService.login(this.username, this.password);
    console.log(JSON.stringify(response));
  }
}
