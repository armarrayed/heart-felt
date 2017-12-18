import { Component, style, HostListener} from '@angular/core';
import { GridOptions } from "ag-grid";
import {Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { editContactDialog } from './edit-contact.component'
@Component({
    templateUrl: "./user-create.component.html",
    styleUrls : ["./user-create.component.css",'../landing-page.component.css']
})
export class UserCreateComponent{
  public gridOptions: GridOptions;
  //columnDefs :Array<any> = [];
  rowData :Array<any> = [];
  private gridApi : any;
  private gridColumnApi : any;
  @HostListener('window:resize') onResize() {
    // guard against resize before view is rendered
console.log('here')
  }
  constructor(public dialog: MatDialog) {
    this.gridOptions = <GridOptions>{
      rowData: UserCreateComponent.createRowData(),
      columnDefs: UserCreateComponent.createColumnDefs(),
      enableSorting: true,
      enableColResize: true
    };
 
  };

   editContact(event : any){
    if(event.colDef.field == 'type')
      this.onBtStartEditing(event.rowIndex);
    else if(event.colDef.field == 'edit'){
      this.openDialog(event.data);
    }
    };

    onCellValueChanged(event : any){
        console.log(event,"onCellValueChanged")
    }
    onGridReady(params : any) {
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;

      this.gridApi.sizeColumnsToFit();
    }

    onBtStartEditing(rowIndx : any) {
      this.gridApi.startEditingCell({
        rowIndex: rowIndx,
        colKey: "type"
      });
    }

    openDialog(rowData : object): void {
      console.log(rowData)
      let dialogRef = this.dialog.open(editContactDialog, {
        width: '500px',
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

  private static createRowData() {
  var gridData = new Array(); 
    for(var x=1;x<200;x++){
     gridData.push({'firstName': "Test"+x, 'lastName': "Txt"+x, 'empId': x,
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