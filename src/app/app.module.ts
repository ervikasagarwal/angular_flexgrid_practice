import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// import Wijmo 
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
// apply Wijmo license key

import { setLicenseKey } from 'wijmo/wijmo';
setLicenseKey('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');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WjChartModule,
    WjGridModule,
    WjInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
