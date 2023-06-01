import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startsite',
  templateUrl: './startsite.component.html',
  styleUrls: ['./startsite.component.css']
})
export class StartsiteComponent {

  constructor(private router:Router){}

  /**
   * starts the login-process by navigating the user to the loginpage
   */
  login() {
    this.router.navigate(['/begin'])
  }

  /**
   * starts the register-process by navigating the user to the registerpage
   */
  newUser() {
    this.router.navigate(['/newUser'])
  }
}
