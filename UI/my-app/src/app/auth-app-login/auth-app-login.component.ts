import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as OTPAuth from "otpauth";

@Component({
  selector: 'app-auth-app-login',
  templateUrl: './auth-app-login.component.html',
  styleUrls: ['./auth-app-login.component.css']
})
export class AuthAppLoginComponent {
  token = "";
  userSecret = new OTPAuth.Secret();
  errorMsg = "";

  constructor(private router:Router, private route: ActivatedRoute){}

  /**
   * checks the database to find the secret of the user and lets the user login with an authenticator-app
   */
  async login_with_token() {
    await fetch("http://" + self.location.host + "/api/" + this.route.snapshot.params['username'])
      .then(resp => resp.json())
      .then(queryRes => {
        console.log(queryRes.queryResult[0])
        if (queryRes.queryResult[0] == null) {
          console.error("No user found")
        }
        else {
          const totp = new OTPAuth.TOTP({
            issuer: this.route.snapshot.params['username'],
            label: "Demo",
            algorithm: "SHA1",
            digits: 6,
            period: 30,
            secret: queryRes.queryResult[0].authAppSecret
          });
          const token = this.token;
          const validation = totp.validate({ token, window: 1 });
          if (validation == 0) {
            this.router.navigate(['/logged-in/auth'])
          }
          else {
            console.log("Token invalid")
            this.errorMsg = "Token invalid";
          }
        }
      })
  }
}
