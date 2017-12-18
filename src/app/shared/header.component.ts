import { Component } from '@angular/core';
import { Router }    from '@angular/router';
@Component({
    selector : "header",
    templateUrl : "./header.component.html"
})
export class HeaderComponent{
    constructor(private router: Router) {};
    
    changeTo(value: string){
        this.router.navigate(['/'+value]); 
    }
}