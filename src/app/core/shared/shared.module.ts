import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatRippleModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {TableComponent} from "./table/table.component";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {ProgressBarModule} from "primeng/progressbar";
import {ButtonModule} from "primeng/button";
import {RouterModule} from "@angular/router";
import {MultiSelectModule} from "primeng/multiselect";
import {InputTextModule} from "primeng/inputtext";
import {CalendarModule} from "primeng/calendar";
import {AllowedRegexDirective} from "../../directive/allowedRegex.directive";

@NgModule({
  declarations: [
    TableComponent,
    AllowedRegexDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatRippleModule,
    FormsModule,
    MatTabsModule,
    TableModule,
    ProgressBarModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    MultiSelectModule,
    RouterModule
  ],
  providers: [],
  exports: [
    TableComponent,
    AllowedRegexDirective
  ]
})
export class SharedModule {
}
