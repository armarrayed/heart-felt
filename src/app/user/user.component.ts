import { Component,Output,EventEmitter,AfterContentChecked,Input } from "@angular/core";
import {FormControl, Validators} from '@angular/forms';
import { MatTabsModule } from '@angular/material';

import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';

export class MatTabChangeEvent {
  index: number;
}

@Component({
    templateUrl : "./user.component.html",
    styleUrls : ["./user.component.css"]
})
export class UserComponent{

    displayedColumns = ['position', 'transactionType', 'amount'];
    dataSource = new ExampleDataSource();
    admins = [{name : "Eswar"},{name : "Chandu"},{name : "Raju"}]
    paymentOption = 'online';
    onlineType = 'refNum';
    hfFundType = {};
    i=8;
    newsFeed = [{title:"Distributed School books",liked : 1 ,note:"There’s one thing we haven’t talked about yet: theming custom components. So far we’ve only changed the look and feel of Angular Material’s components. That’s because we’re calling the angular-material-theme mix-in with our custom theme object. If we’d remove that call, we’d end up with all Material components in their base colors. This becomes more clear when we take a look at what angular-material-theme does",images:"assets/images/socialService1.jpg",
                likes:"",time:"12/02/2017"},
                {title:"Helped poor people",liked : 0,note:"There’s one thing we haven’t talked about yet: theming custom components. So far we’ve only changed the look and feel of Angular Material’s components. That’s because we’re calling the angular-material-theme mix-in with our custom theme object. If we’d remove that call, we’d end up with all Material components in their base colors. This becomes more clear when we take a look at what angular-material-theme does:There’s one thing we haven’t talked about yet: theming custom components. So far we’ve only changed the look and feel of Angular Material’s components. That’s because we’re calling the angular-material-theme mix-in with our custom theme object. If we’d remove that call, we’d end up with all Material components in their base colors. This becomes more clear when we take a look at what angular-material-theme ",
                images:"",likes:"",time:"20/04/2017"},
                {title:"Helped poor people",liked : 0,note:"There’s one thing we haven’t talked about yet: This becomes more clear when we take a look at what angular-material-theme does:There’s one thing we haven’t talked about yet: theming custom components. So far we’ve only changed the look and feel of Angular Material’s components. That’s because we’re calling the angular-material-theme mix-in with our custom theme object. If we’d remove that call, we’d end up with all Material components in their base colors. This becomes more clear when we take a look at what angular-material-theme ",
                images:"",likes:"",time:"20/04/2017"}];

     /** Event emitted when the tab selection has changed. */
  @Output() selectedTabChange: EventEmitter<MatTabChangeEvent> = new EventEmitter<MatTabChangeEvent>(true);
constructor(){}
           
_focusChanged(x : any){
}

loadMoreContacts(){
  var moreData = [
    {position: this.i++, transactionType: 'online', amount: 300},
    {position: this.i++, transactionType: 'cash', amount: 100},
    {position: this.i++, transactionType: 'online', amount: 100},
    {position: this.i++, transactionType: 'cash', amount: 200},
    {position: this.i++, transactionType: 'online', amount: 100}]
    data = data.concat(moreData);
    this.dataSource = new ExampleDataSource();
}
}

export interface Element {
    transactionType: string;
    position: number;
    amount: number;
  }
  
  var data: Element[] = [
    {position: 1, transactionType: 'online', amount: 300},
    {position: 2, transactionType: 'cash', amount: 100},
    {position: 3, transactionType: 'online', amount: 100},
    {position: 4, transactionType: 'cash', amount: 200},
    {position: 5, transactionType: 'online', amount: 100},
    {position: 6, transactionType: 'online', amount: 100},
    {position: 7, transactionType: 'cash', amount: 200},
    {position: 8, transactionType: 'online', amount: 100}
  ];
  
  /**
   * Data source to provide what data should be rendered in the table. The observable provided
   * in connect should emit exactly the data that should be rendered by the table. If the data is
   * altered, the observable should emit that new set of data on the stream. In our case here,
   * we return a stream that contains only one set of data that doesn't change.
   */
  export class ExampleDataSource extends DataSource<any> {
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Element[]> {
      return Observable.of(data);
    }
  
    disconnect() {}
  }