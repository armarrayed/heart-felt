import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';

//Routing
import { RoutingModule } from './routing.module';

//AngularMaterial
import {MatInputModule,MatRadioModule,MatCheckboxModule,MatTableModule,MatProgressSpinnerModule,MatTabsModule,MatButtonModule,MatSelectModule,MatCardModule,MatFormFieldModule,MatDialogModule} from '@angular/material';
import {ObserversModule} from '@angular/cdk/observers';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TagInputModule } from 'ngx-chips';
import { MatSort } from '@angular/material';
import "@angular/material/prebuilt-themes/purple-green.css";

//Components
import { AppComponent }   from './landing-page.component';
import { LoginComponent } from './log-in.component';
import { UserComponent }  from './user/user.component';
import { AmountDetailsComponent } from './admin/amount-details.component';
import { UserCreateComponent } from './admin/user-create.component';
import { SharedComponentsModule } from './shared/hf-shared-components.module';
import { editContactDialog } from './admin/edit-contact.component'
import  'rxjs/add/observable/of';
import {AgGridModule} from "ag-grid-angular";


@NgModule({
  imports: [ 
    BrowserModule,
    SharedComponentsModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RoutingModule,
    ObserversModule,
    InfiniteScrollModule,
    TagInputModule,
    MatInputModule, MatRadioModule, MatCheckboxModule, MatTableModule, MatProgressSpinnerModule, MatTabsModule, MatButtonModule, MatSelectModule, MatCardModule, MatFormFieldModule,MatDialogModule,
   AgGridModule.withComponents([UserCreateComponent])
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    AmountDetailsComponent,
    UserCreateComponent,editContactDialog
   // HeaderComponent,
   // ExampleDataSource
  ],
  entryComponents: [
    editContactDialog,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
