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
  password = "";

  admin_username = "admin";
  admin_password = "admin";

  constructor(private router:Router){}

  check_admin() {
    if (this.username == this.admin_username && this.password == this.admin_password) {
      console.info("weeeee, rerouting");
      this.router.navigate(['/authApp'])
    }
    else {
      console.error("Wrong Username or Password")
    }
  }
}
