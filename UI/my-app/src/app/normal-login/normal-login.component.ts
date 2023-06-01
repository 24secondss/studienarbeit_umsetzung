import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-normal-login',
  templateUrl: './normal-login.component.html',
  styleUrls: ['./normal-login.component.css']
})
export class NormalLoginComponent {
  hide = true;
  password = "";
  errorMsg = "";

  constructor(private router:Router, private route: ActivatedRoute){}

  /**
   * Checks if given and saved passwords match
   * NOTE: passwords are NOT hashed!
   */
  async login_with_credentials() {
    await fetch("http://" + self.location.host + "/api/" + this.route.snapshot.params['username'])
      .then(resp => resp.json())
      .then(queryRes => {
        if(queryRes.queryResult[0].password == this.password) {
          this.router.navigate(['/logged-in/pw'])
        }
        else {
          console.error("Password wrong")
          this.errorMsg = "Ungültiges Passwort"
        }
      })
  }
}
