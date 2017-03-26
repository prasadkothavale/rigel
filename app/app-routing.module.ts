import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginCover } from './login/login-cover.component';
import { Help } from './help/help.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginCover },
  { path: 'help',  component: Help }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
