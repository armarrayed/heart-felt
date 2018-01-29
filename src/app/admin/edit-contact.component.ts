
import { Component, Inject, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: 'edit-contact.component.html',
    styleUrls: ['../log-in.component.css','./edit-contact.component.css']
  })
export class editContactDialog implements OnInit{
    empDetails : any;
    email = new FormControl('');
    firstName = new FormControl('');
    lastName = new FormControl('');
    phone = new FormControl('');
    empId = new FormControl('');

    constructor(
      public dialogRef: MatDialogRef<editContactDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any ) {
      this.empDetails = data.rowData;
       }

    ngOnInit(){
      if (this.empDetails){
        this.firstName.setValue(this.empDetails.firstName != "" ? this.empDetails.firstName : "");
        this.lastName.setValue(this.empDetails.lastName != "" ? this.empDetails.lastName : "");
        this.phone.setValue(this.empDetails.phone != "" ? this.empDetails.phone : "");
        this.email.setValue(this.empDetails.email != "" ? this.empDetails.email : "");
      }
    }
  
    onNoClick(): void {
      this.dialogRef.close()
    }
  
  }