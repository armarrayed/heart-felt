import { Component } from "@angular/core";
import { Router }    from '@angular/router';
import { LoginService } from './services/login.service'
import * as _ from 'underscore';

@Component({
    templateUrl : "./log-in.component.html",
    styleUrls: ['./log-in.component.css']
})
export class LoginComponent{ 
    logInId: string = "";
    crtPassword : string = "";
    crtnew : object = {};
    logInPassword : string = "";
    user : Array<any>
    constructor(private router: Router, private LoginService: LoginService) { 
        // type   1:user
        //        2:Admin Online
        //        3:Admin by hand

    };
    logIn(){
        var ipData = {userName : this.logInId,password : this.logInPassword}
        var loggedInUser : any;

        this.LoginService.login(ipData).subscribe(response => {
        if (response.code == 200){
            loggedInUser = response.result[0];
            if (loggedInUser.type == 2 || loggedInUser.type == 3)
                this.router.navigate(['/admin']);
            else
                this.router.navigate(['/user']);

            localStorage.setItem('uName',loggedInUser.userName);
            localStorage.setItem('uid', loggedInUser.uid);

        }else{
            alert(response.message)
        }
        })



    
    }

}