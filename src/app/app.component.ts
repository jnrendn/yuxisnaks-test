import { Component } from '@angular/core';

import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  name: any;
  state: string = '';
  hide: boolean = true;

  constructor(public af: AngularFire,private router: Router) {
    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
        this.hide = false;
      }else {
        this.hide = true;
      }
    });

  }

  logout() {
     this.af.auth.logout();
     alert('logged out');
     this.router.navigateByUrl('/product');
  }
}
