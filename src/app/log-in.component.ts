import { Component } from "@angular/core";
import { Router }    from '@angular/router';

@Component({
    templateUrl : "./log-in.component.html",
    styleUrls: ['./log-in.component.css']
})
export class LoginComponent{ 
    constructor(private router: Router) {};

    crtPassword : string = "";
    crtnew : object = {};
    logInPassword : string = "";
    logIn(){
        if(this.logInPassword == "user")
            this.router.navigate(['/user']);
        else
        this.router.navigate(['/admin']);
    }

}