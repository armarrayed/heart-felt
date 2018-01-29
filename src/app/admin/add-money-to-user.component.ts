
import { Component, Inject, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './add-money-to-user.component.html',
    styleUrls: ['./add-money-to-user.component.css']
  })
export class AddMoneyToUserDialog implements OnInit{
    loggedInUser : string;
    users : Array<any>;
    selected : Object;
    constructor(
      public dialogRef: MatDialogRef<AddMoneyToUserDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any ,) {}

    ngOnInit(){
        this.loggedInUser = localStorage.getItem('uName');
        this.users = [{name : 'Mahesh',uid : 'cs1039c' ,defaultAmmount : 100},
        {name : 'Ram',uid : 'cs1039c' ,defaultAmmount : 200},
        {name : 'Georgia',uid : 'cs1039c' ,defaultAmmount : 500},
        {name : 'Pooji',uid : 'cs1039c' ,defaultAmmount : 400},
        {name : 'ChandranKala',uid : 'cs1039c' ,defaultAmmount : 300}]
    }
  
    onNoClick(): void {
      this.dialogRef.close()
    }
  
  }