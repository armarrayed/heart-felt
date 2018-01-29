import { Component,OnInit } from "@angular/core";
import { AddMoneyToUserDialog } from "./add-money-to-user.component"
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    templateUrl : "./amount-details.component.html",
     styleUrls : ["./amount-details.component.css"]
})
export class AmountDetailsComponent implements OnInit{
    fundList : Array<any> = [];
    windowHeight : number;

    constructor(public dialog: MatDialog) {}
    ngOnInit(){
        this.windowHeight = window.innerHeight
        for (var index = 0; index < 10; index++) {
            this.fundList.push({ 'firstName': 'Test', 'lastName': index,'funded':100,'empId':'cs1039'+index+1})            
        }
    }

    fundStatus(status:boolean,contact: any){
        if(status){
            contact.isAccepted = true;  
             //make api call to sav data.
        }
       else{
           
       }
    }

    openAddDialog(): void{
        let dialogRef = this.dialog.open(AddMoneyToUserDialog, {            
            disableClose : true,
            panelClass : "add_contact_container",
          });
    }
}