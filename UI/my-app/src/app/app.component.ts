import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  hide = true;
  username = "";

  constructor(private router:Router){}

  async check_login_method() {
    await fetch("http://" + self.location.host + "/" + this.username)
      .then(resp => resp.json())
      .then(queryRes => {
        console.log(queryRes)
        // if (queryRes.queryResult.length() == 0) {
        //   console.error("NIX GEFUNDEN")
        // }
        // else {
        //   console.warn(queryRes)
        //   if (queryRes.queryResult.active2FA == true) {
        //     this.router.navigate(['/authApp'])
        //   }
        //   else {
        //     this.router.navigate(['/'])
        //   }
        }
      })
  }
}
