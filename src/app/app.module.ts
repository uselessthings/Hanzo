import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MaterialModule,
  MdSidenavModule,
  MdButtonModule,
  MdToolbarModule,
  MdTabsModule,
  MdGridListModule,
  MdDialogModule,
  MdListModule,
  MdSnackBarModule,
  MdProgressBarModule
} from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdSidenavModule,
    MdButtonModule,
    MdToolbarModule,
    MdTabsModule,
    MdGridListModule,
    MdDialogModule,
    MdListModule,
    MdSnackBarModule,
    MdProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
