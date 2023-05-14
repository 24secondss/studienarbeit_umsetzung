import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-normal-login',
  templateUrl: './normal-login.component.html',
  styleUrls: ['./normal-login.component.css']
})
export class NormalLoginComponent {
  hide = true;
  username = "";
  password = "";

  admin_username = "admin";
  admin_password = "admin";

  constructor(private router:Router){}

  check_admin() {
    if (this.username == this.admin_username && this.password == this.admin_password) {
      this.router.navigate(['/authApp'])
    }
    else {
      console.error("Wrong Username or Password")
    }
  }
}
