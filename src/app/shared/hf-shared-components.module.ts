import { NgModule } from '@angular/core';

import { HeaderComponent } from './header.component';
import { ShowMore } from './show-more.directive';
@NgModule({
    declarations: [
        HeaderComponent,
        ShowMore
    ],
    exports: [
        HeaderComponent,
        ShowMore
    ]
})
export class SharedComponentsModule{}