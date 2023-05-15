import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthAppLoginComponent} from '../app/auth-app-login/auth-app-login.component'
import { NormalLoginComponent } from './normal-login/normal-login.component';
import { GiveUsernameComponent } from './give-username/give-username.component';
import { LoggedInScreenComponent } from './logged-in-screen/logged-in-screen.component';
import { StartsiteComponent } from './startsite/startsite.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  {path:'authApp/:username', component: AuthAppLoginComponent},
  {path:'normal-login/:username', component: NormalLoginComponent},
  {path: 'logged-in', component: LoggedInScreenComponent},
  {path: 'begin', component: GiveUsernameComponent},
  {path: 'newUser', component: NewUserComponent},
  {path: '', component: StartsiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
