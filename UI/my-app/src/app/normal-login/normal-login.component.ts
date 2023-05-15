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

  constructor(private router:Router, private route: ActivatedRoute){}

  async login_with_credentials() {
    await fetch("http://" + self.location.host + "/" + this.route.snapshot.params['username'])
      .then(resp => resp.json())
      .then(queryRes => {
        if(queryRes.queryResult[0].password == this.password) {
          this.router.navigate(['/logged-in'])
        }
        else {
          console.error("Password wrong")
          // Error anzeigen
        }
      })
  }
}
