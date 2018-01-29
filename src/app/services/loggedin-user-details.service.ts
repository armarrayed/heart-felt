import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';

@Injectable()
export class LoggedinUserService{
    currentUserName: string;
    currentLoginType : number;

    // set currentUserDetails(userDetails : Object){
    //     this.currentUserName = userDetails['name'];
    //     this.currentLoginType = userDetails['type']
    // } 
    

}