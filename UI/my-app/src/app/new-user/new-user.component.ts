import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as OTPAuth from "otpauth";
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
  userErrorMsg = "";
  pwErrorMsg = "";

  constructor(private router:Router){}

  /**
   * Generates new authenticator-secret and displays it as a qr-code on the website
   */
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

  /**
   * saves a new user in the database, using the inputs from the user over the website
   */
  async saveNewUser() {
    if (this.username == "") {
      this.userErrorMsg = "Sie müssen einen Benutzernamen eingeben!"
    }
    else if (this.password == "" && this.authApp == false) {
      this.pwErrorMsg = "Wenn Sie keine Authenticator-App einrichten wollen, müssen Sie ein Passwort angeben!"
    }
    else {
      this.userErrorMsg = ""
      this.pwErrorMsg = ""
      const data = {
        "username": this.username,
        "password": this.password,
        "authAppSecret": this.secretAsBase32,
        "active2FA": this.authApp
      }
      await fetch("http://" + self.location.host + "/api/", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(resp => {
        console.log(resp)
        this.router.navigate(['/logged-in/new'])
      })
    }
    
  }

}
