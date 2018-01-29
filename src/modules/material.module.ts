import { NgModule } from '@angular/core';
import { MatInputModule, MatRadioModule, MatCheckboxModule, MatTableModule, MatProgressSpinnerModule, MatTabsModule, MatButtonModule, MatSelectModule, MatCardModule, MatFormFieldModule, MatDialogModule,MatListModule, } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
    imports: [
        MatIconModule,MatInputModule, MatRadioModule, MatCheckboxModule, MatTableModule, MatProgressSpinnerModule, MatTabsModule, MatButtonModule, MatSelectModule, MatCardModule, MatFormFieldModule, MatDialogModule,MatListModule 
    ],
    exports: [
        MatIconModule,MatInputModule, MatRadioModule, MatCheckboxModule, MatTableModule, MatProgressSpinnerModule, MatTabsModule, MatButtonModule, MatSelectModule, MatCardModule, MatFormFieldModule, MatDialogModule,MatListModule 
    ]
})
export class MaterialModule{}
