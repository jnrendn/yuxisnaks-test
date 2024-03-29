import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
    state: string = '';
    error: any;

    constructor(public af: AngularFire,private router: Router) {
        this.af.auth.subscribe(auth => { 
        if(auth) {
            this.router.navigateByUrl('/user');
            }
        });
    }


    onSubmit(formData) {
        if(formData.valid) {
            console.log(formData.value);
            this.af.auth.login({
                email: formData.value.email,
                password: formData.value.password
            },
            {
                provider: AuthProviders.Password,
                method: AuthMethods.Password,
            }).then(
                (success) => {
                console.log(success);
                this.router.navigate(['/user']);
            }).catch(
                (err) => {
                alert(err.message);
                console.log(err);
                this.error = err;
            })
        }
    }
}