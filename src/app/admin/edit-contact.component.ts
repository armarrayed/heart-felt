// import {Component, Inject} from '@angular/core';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

// /**
//  * @title Dialog Overview
//  */
// @Component({
//   selector: 'dialog-overview-example',
//   templateUrl: 'dialog-overview-example.html'
// })
// export class DialogOverviewExample {

//   animal: string;
//   name: string;

//   constructor(public dialog: MatDialog) {}

//   openDialog(): void {
//     let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
//       width: '250px',
//       data: { name: this.name, animal: this.animal }
//     });

//     dialogRef.afterClosed().subscribe(result => {
//       console.log('The dialog was closed');
//       this.animal = result;
//     });
//   }

// }

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: any) { }

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }

import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    templateUrl: 'edit-contact.component.html',
    styleUrls: ['../log-in.component.css']
  })
  export class editContactDialog {
    crtnew : {[k: string]: any} = {};
    constructor(
      public dialogRef: MatDialogRef<editContactDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) {
          this.crtnew.firstName = data.rowData.firstName;
          this.crtnew.lastName = data.rowData.lastName;
          this.crtnew.phone = data.rowData.phone;
          this.crtnew.email = data.rowData.email;
       }
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
  }