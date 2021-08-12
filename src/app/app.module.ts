import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxCsvParserModule } from 'ngx-csv-parser';

  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasesReportComponent } from './cases-report/cases-report.component';

@NgModule({
  declarations: [
    AppComponent,
    CasesReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
