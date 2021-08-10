import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './core/components/page-header/page-header.component';
import { PageSidebarComponent } from './core/components/page-sidebar/page-sidebar.component';

import { ReportsModule } from './features/reports/reports.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageFooterComponent } from './core/components/page-footer/page-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    PageSidebarComponent,
    PageFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReportsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
