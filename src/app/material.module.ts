import { NgModule } from "@angular/core";
import { 
    MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatDatepickerModule, 
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatMenuModule
} from "@angular/material";

@NgModule({
    imports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatIconModule, 
        MatInputModule, 
        MatFormFieldModule, 
        MatDatepickerModule, 
        MatNativeDateModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatMenuModule
    ],
    exports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatIconModule, 
        MatInputModule, 
        MatFormFieldModule, 
        MatDatepickerModule, 
        MatNativeDateModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatCardModule,
        MatSelectModule,
        MatProgressSpinnerModule,
        MatMenuModule
    ]
})
export class MaterialModule {}