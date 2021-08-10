import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports/reports.component';
import { SummaryPackComponent } from './summary-pack/summary-pack.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndividualReportsComponent } from './individual-reports/individual-reports.component';



@NgModule({
  declarations: [
    ReportsComponent,
    SummaryPackComponent,
    IndividualReportsComponent
  ],
  imports: [
    CommonModule,
    NgbModule, FormsModule
  ],
  exports: [ ReportsComponent,SummaryPackComponent ]
})
export class ReportsModule { }
