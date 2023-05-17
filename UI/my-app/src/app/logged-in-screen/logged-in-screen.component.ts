import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-logged-in-screen',
  templateUrl: './logged-in-screen.component.html',
  styleUrls: ['./logged-in-screen.component.css']
})
export class LoggedInScreenComponent {
  msg = "";
  
  constructor(private router:Router, private route:ActivatedRoute){}

  ngOnInit() {
    if (this.route.snapshot.params['msg'] == "auth") {
      this.msg = "Herzlichen Glückwunsch, Sie haben sich erfolgreich mit Hilfe einer Authenticator-App eingeloggt."
    }
    else if (this.route.snapshot.params['msg'] == "new") {
      this.msg = "Herzlichen Glückwunsch, Sie haben erfolgreich einen neuen Benutzer angelegt! Loggen Sie sich nun aus, um das Login mit Ihrer ausgewählten Login-Methode zu testen."
    }
    else {
      this.msg = "Herzlichen Glückwunsch, Sie haben sich erfolgreich mit Hilfe eines Passworts eingeloggt."
    }
  }

  logout() {
    this.router.navigate([''])
  }
}
