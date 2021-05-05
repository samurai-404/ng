import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { AdminUserModule } from './admin-user/admin-user.module';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    AdminUserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
