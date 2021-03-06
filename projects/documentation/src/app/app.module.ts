import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';

import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ScullyImageModule } from 'scully-image';

// dev
// import { ScullyImageModule } from '../../../../dist/scully-image';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    MatButtonModule,
    FlexLayoutModule,
    ScullyImageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
