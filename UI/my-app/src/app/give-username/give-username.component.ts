import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-give-username',
  templateUrl: './give-username.component.html',
  styleUrls: ['./give-username.component.css']
})
export class GiveUsernameComponent {
  username = "";
  usernameErrorMsg = ""

  constructor(private router:Router){}
  
  /**
   * checks, if the user needs to login with a passwort or can login with authenticator-app
   * checks the database for the 'active2FA' field
   */
  async check_login_method() {
    await fetch("http://" + self.location.host + "/api/" + this.username)
      .then(resp => resp.json())
      .then(queryRes => {
        if (queryRes.queryResult[0] == null) {
          console.error("Username not found")
          this.usernameErrorMsg = "Username nicht gefunden."
        }
        else {
          if (queryRes.queryResult[0].active2FA == true) {
            this.router.navigate(['/authApp/' + this.username])
          }
          else {
            this.router.navigate(['/normal-login/' + this.username])
          }
        }
      })
  }
}
