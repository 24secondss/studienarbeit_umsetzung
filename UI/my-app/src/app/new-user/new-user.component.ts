import { Component } from '@angular/core';
import * as OTPAuth from "otpauth";
import { Secret } from 'otpauth';
import * as QRCode from 'qrcode';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  hide = true;
  secretAsBase32 = "";
  validationText = "";
  username = "";
  password = "";
  authApp = false;

  generate_new_secret() {
    const secret = new OTPAuth.Secret();
    const totp = new OTPAuth.TOTP({
      issuer: this.username,
      label: "Demo-Website",
      algorithm: "SHA1",
      digits: 6,
      period: 30,
      secret: secret
    });

    this.secretAsBase32 = secret.base32;
    const authKey = totp.toString();

    const canvas = document.getElementById('canvas');
    QRCode.toCanvas(canvas, authKey, function (e) {
      if (e) {
        console.error(e);
      }
    })
  }

  async saveNewUser() {
    const data = {
      "username": this.username,
      "password": this.password,
      "authAppSecret": this.secretAsBase32,
      "active2FA": this.authApp
    }
    await fetch("http://" + self.location.host + "/", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(resp => {
      console.log(resp)
      // navigate
    })
  }

}
