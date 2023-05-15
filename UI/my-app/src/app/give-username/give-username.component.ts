import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-give-username',
  templateUrl: './give-username.component.html',
  styleUrls: ['./give-username.component.css']
})
export class GiveUsernameComponent {
  username = "";

  constructor(private router:Router){}
  
  async check_login_method() {
    this.router.navigate(['/authApp/' + this.username])
    await fetch("http://" + self.location.host + "/" + this.username)
      .then(resp => resp.json())
      .then(queryRes => {
        if (queryRes.queryResult[0] == null) {
          console.error("Username not found")
          // Benutzername nich gefunden, error ausgeben
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
