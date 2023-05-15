import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startsite',
  templateUrl: './startsite.component.html',
  styleUrls: ['./startsite.component.css']
})
export class StartsiteComponent {

  constructor(private router:Router){}

  begin() {
    this.router.navigate(['/begin'])
  }

  newUser() {
    this.router.navigate(['/newUser'])
  }
}
