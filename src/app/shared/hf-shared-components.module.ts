import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { HeaderComponent } from './header.component';
import { ShowMore } from './show-more.directive';
@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        ShowMore
    ],
    exports: [
        HeaderComponent,
        ShowMore,
        CommonModule
    ]
})
export class SharedComponentsModule{}