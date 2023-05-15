import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AuthAppLoginComponent } from './auth-app-login/auth-app-login.component';
import { NormalLoginComponent } from './normal-login/normal-login.component';
import {MatCardModule} from '@angular/material/card';
import { LoggedInScreenComponent } from './logged-in-screen/logged-in-screen.component';
import { GiveUsernameComponent } from './give-username/give-username.component';
import { StartsiteComponent } from './startsite/startsite.component';
import { NewUserComponent } from './new-user/new-user.component'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 

@NgModule({
  declarations: [
    AppComponent,
    AuthAppLoginComponent,
    NormalLoginComponent,
    LoggedInScreenComponent,
    GiveUsernameComponent,
    StartsiteComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
