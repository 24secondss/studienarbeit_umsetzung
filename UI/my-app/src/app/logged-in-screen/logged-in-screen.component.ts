import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logged-in-screen',
  templateUrl: './logged-in-screen.component.html',
  styleUrls: ['./logged-in-screen.component.css']
})
export class LoggedInScreenComponent {

  constructor(private router:Router){}

  logout() {
    this.router.navigate([''])
  }
}
