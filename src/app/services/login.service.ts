import { Injectable } from '@angular/core';
import { Http,Headers,Response,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService{
    public baseUrl  = "http://127.0.0.1:8082";
    private headers = new Headers({
        'Content-Type': 'text/plain'
    });
    constructor(private http: Http) {}

    login(user : any){
        let headers      = new Headers({'Content-Type': 'application/json','session_id':'gdsjhsgbdjhg54sdadasd56sdasfd5'}); 
        let options      = new RequestOptions({ headers: headers });
            return this.http.post(`${this.baseUrl}/catalog/login`,{params: user},options)
               .map((res:Response) => res.json())

    }    

}