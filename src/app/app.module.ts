import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';

//Routing
import { RoutingModule } from './routing.module';

//AngularMaterial
import { MaterialModule } from '../modules/material.module'

//services
import { LoggedinUserService } from './services/loggedin-user-details.service'
import { LoginService } from './services/login.service'


import {ObserversModule} from '@angular/cdk/observers';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
// import { TagInputModule } from 'ngx-chips';
// import { MatSort } from '@angular/material';
import "@angular/material/prebuilt-themes/purple-green.css";

//Components
import { AppComponent }   from './landing-page.component';
import { LoginComponent } from './log-in.component';
import { UserComponent }  from './user/user.component';
import { AmountDetailsComponent } from './admin/amount-details.component';
import { UserCreateComponent } from './admin/user-create.component';
import { SharedComponentsModule } from './shared/hf-shared-components.module';
import { editContactDialog } from './admin/edit-contact.component';
import { AddMoneyToUserDialog } from "./admin/add-money-to-user.component"
import  'rxjs/add/observable/of';
import {AgGridModule} from "ag-grid-angular";


@NgModule({
  imports: [ 
    BrowserModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RoutingModule,
    ObserversModule,
    InfiniteScrollModule,
    MaterialModule,
    AgGridModule.withComponents([UserCreateComponent])
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AmountDetailsComponent,
    UserCreateComponent,
    editContactDialog,
    AddMoneyToUserDialog
  ],
  entryComponents: [
    editContactDialog,
    AddMoneyToUserDialog
  ],
  providers : [
    LoggedinUserService,
    LoginService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
