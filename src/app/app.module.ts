import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import {AgGridModule} from "ag-grid-angular/main";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryGridComponent } from './inventory-grid/inventory-grid.component';
import { PermanantEmployeesComponent } from './permanant-employees/permanant-employees.component';
import { TemporaryEmployeesComponent } from './temporary-employees/temporary-employees.component';
import { ReportsComponent } from './reports/reports.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { AGgridComponent } from './ag-grid/ag-grid.component';

const appRoutes: Routes = [
  { path: '', component: InventoryGridComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'enquiry', component: EnquiryComponent },
  { path: 'temporaryEmployees', component: PermanantEmployeesComponent },  
  { path: 'permanantEmployees', component: TemporaryEmployeesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    InventoryGridComponent,
    PermanantEmployeesComponent,
    TemporaryEmployeesComponent,
    ReportsComponent,
    EnquiryComponent,
    AGgridComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AgGridModule.withComponents([
      
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
