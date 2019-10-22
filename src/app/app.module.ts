import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PullToRefreshComponent } from './pull-to-refresh/pull-to-refresh.component';

@NgModule({
  declarations: [
    AppComponent,
    PullToRefreshComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
