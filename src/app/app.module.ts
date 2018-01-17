import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { HttpModule } from '@angular/http';

import { ContactService } from './contact.service';
import {ContactResolve} from './contact.resolve';
import {DetailResolve} from './detail.resolve';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    DashboardComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [ContactService,ContactResolve,DetailResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
