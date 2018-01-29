import { Component,OnInit } from '@angular/core';
import { Router }    from '@angular/router';
import { LoggedinUserService } from '../services/loggedin-user-details.service'
import { CommonModule } from "@angular/common";
@Component({
    selector : "header",
    templateUrl : "./header.component.html",
})
export class HeaderComponent{
    userType: number;

    constructor(private router: Router, private loggedinUserService: LoggedinUserService) {};

    ngOnInit(){
        this.userType = this.loggedinUserService.currentLoginType;
    }
    changeTo(value: string){
        this.router.navigate(['/'+value])
    }
}