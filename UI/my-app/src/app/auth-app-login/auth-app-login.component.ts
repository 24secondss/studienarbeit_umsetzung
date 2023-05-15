import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as OTPAuth from "otpauth";
import { Secret } from 'otpauth';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-auth-app-login',
  templateUrl: './auth-app-login.component.html',
  styleUrls: ['./auth-app-login.component.css']
})
export class AuthAppLoginComponent {
  token = "";
  userSecret = new OTPAuth.Secret();

  constructor(private router:Router, private route: ActivatedRoute){}

  async login_with_token() {
    await fetch("http://" + self.location.host + "/" + this.route.snapshot.params['username'])
      .then(resp => resp.json())
      .then(queryRes => {
        console.log(queryRes.queryResult[0])
        if (queryRes.queryResult[0] == null) {
          console.error("NIX GEFUNDEN")
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
            this.router.navigate(['/logged-in'])
          }
          else {
            console.log("Token invalid")
            // Error anzeigen
          }
        }
      })
  }
}
