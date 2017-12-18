import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { UserComponent }         from './user/user.component';
import { AmountDetailsComponent }from './admin/amount-details.component';
import { UserCreateComponent }   from './admin/user-create.component';
import { LoginComponent }        from './log-in.component'

const appRoutes: Routes = [
    
     { path: 'login',component: LoginComponent },
     { path: 'user',component: UserComponent },
     { path: 'admin',component: AmountDetailsComponent },
     { path: 'user-create',component: UserCreateComponent },
     { path: '',   redirectTo: '/login', pathMatch: 'full' },
    // { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
       // { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class RoutingModule {}