import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthAppLoginComponent} from '../app/auth-app-login/auth-app-login.component'
import { NormalLoginComponent } from './normal-login/normal-login.component';

const routes: Routes = [
  {path:'authApp', component: AuthAppLoginComponent},
  {path:'', component: NormalLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
