import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as OTPAuth from "otpauth";
import { Secret } from 'otpauth';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-auth-app-login',
  templateUrl: './auth-app-login.component.html',
  styleUrls: ['./auth-app-login.component.css']
})
export class AuthAppLoginComponent {
  secretAsBase32 = "";
  token = "";
  userSecret = new OTPAuth.Secret();
  validationText = "";

  constructor(private router:Router){}

  generate_new_secret() {
    const secret = new OTPAuth.Secret();
    const totp = new OTPAuth.TOTP({
      issuer: "ME",
      label: "Test",
      algorithm: "SHA1",
      digits: 6,
      period: 30,
      secret: secret
    });

    // Print von QR-Code für Apps fehlt noch
    this.secretAsBase32 = secret.base32;
    this.userSecret = secret;
    const authKey = totp.toString();

    const canvas = document.getElementById('canvas');
    QRCode.toCanvas(canvas, authKey, function (e) {
      if (e) {
        console.error(e);
      }
    })

    console.log(totp.generate());
    this.validationText = "";
  }

  validate_token() {
    const totp = new OTPAuth.TOTP({
      issuer: "ME",
      label: "Test",
      algorithm: "SHA1",
      digits: 6,
      period: 30,
      secret: this.userSecret
    });
    const token = this.token;
    const validation = totp.validate({ token, window: 1 });
    if (validation == 0) {
      this.validationText = "Token is valid";
    }
    else {
      this.validationText = "Token is invalid"
    }
  }

  logout() {
    this.router.navigate(['']);
  }
}
