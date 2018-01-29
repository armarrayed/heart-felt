import { Component, style, HostListener, Inject} from '@angular/core';
import { GridOptions } from "ag-grid";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { editContactDialog } from './edit-contact.component'


@Component({
    templateUrl: "./user-create.component.html",
    styleUrls : ["./user-create.component.css",'../landing-page.component.css']
})
export class UserCreateComponent{
  public gridOptions: GridOptions;
  rowData :Array<any> = [];
  private gridApi : any;
  private gridColumnApi : any;

  constructor(public dialog: MatDialog) {
    this.gridOptions = <GridOptions>{
      rowData: UserCreateComponent.createRowData(),
      columnDefs: UserCreateComponent.createColumnDefs(),
      enableSorting: true,
      enableColResize: true
    };

  };

    @HostListener('window:resize') onResize() {
      console.log('here')
    }

   editContact(event : any){
      if(event.colDef.field == 'type')
        this.onBtStartEditing(event.rowIndex);
      else if(event.colDef.field == 'edit'){
        this.editContactPopup(event.data);
      }
    };

    addNewContact(){
      this.editContactPopup({});
    }

    

    onGridReady(params : any) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;

      this.gridApi.sizeColumnsToFit();
    }

    onCellValueChanged(event: any) {
      console.log(event, "onCellValueChanged")
    }

    onBtStartEditing(rowIndx : any) {
      this.gridApi.startEditingCell({
        rowIndex: rowIndx,
        colKey: "type"
      });
    }

    editContactPopup(rowData : object): void {
      let dialogRef = this.dialog.open(editContactDialog, {
        panelClass: 'edit-contact-dialog',
        width: '550px',
        data: { rowData },
        disableClose : true
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
  

  private static createColumnDefs() {
    return [
      { headerName: "Edit", field: "edit",
      cellRenderer: function(){
        return '<div><i class="fa fa-pencil" aria-hidden="true"></i></div>'
      },width : 80,cellClass: 'my-class',suppressSorting : true 
    },
    { headerName: "First Name", field: "firstName", editable: true ,suppressClickEdit:true},
    { headerName: "Last Name", field: "lastName", editable: true },
    { headerName: "Employee Id", field: "empId",width :127 },
    { headerName: "Email", field: "email", editable: true },
    { headerName: "Phone", field: "phone", editable: true,width : 120,suppressSorting : true },
    { headerName: "Ammount", field: "defAmmount", editable: true,width : 110 },
    { headerName: "Type", field: "type", editable: true,width : 100, cellEditor: "select", cellEditorParams: {
        values: [
            "cash",
            "online"
        ]
    } }
    ]
  };

  private static makeName() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

  private static createRowData() {
  var gridData = new Array(); 
    for(var x=1;x<200;x++){
      gridData.push({
        'firstName': this.makeName(), 'lastName': this.makeName(), 'empId':'cs10'+ x+'c',
      "email": x+'@gmail.com', "phone": 878389789, "defAmmount": 100,
      "type": 'cash'})
    }
    return gridData;

    // return [
    //   {
    //     'firstName': "Mahesh", 'lastName': "m", 'empId': 1,
    //     "email": 'abc@gmail.com', "phone": 8978389789, "defAmmount": 100,
    //     "type": 'cash', "edit": "symbol"
    //   },
    //   {
    //     'firstName': "Ram", 'lastName': "V", 'empId': 2,
    //     "email": 'abc@gmail.com', "phone": 1245879634, "defAmmount": 100,
    //     "type": 'cash', "edit": "symbol"
    //   },
    //   {
    //     'firstName': "Deva", 'lastName': "V", 'empId': 3,
    //     "email": 'abc@gmail.com', "phone": 1245879634, "defAmmount": 100,
    //     "type": 'cash', "edit": "symbol"
    //   },
    //   {
    //     'firstName': "Venky", 'lastName': "V", 'empId': 4,
    //     "email": 'abc@gmail.com', "phone": 1245879634, "defAmmount": 100,
    //     "type": 'cash', "edit": "symbol"
    //   },
    // ]
  };

  

}