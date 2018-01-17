import { Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactResolve } from './contact.resolve';
import { DetailResolve } from './detail.resolve';

export const AppRoutes: Routes = [
  { path: 'contact', 
    component: ContactListComponent,
    resolve: {
      contact: ContactResolve,
    }},
  { path: '', component: DashboardComponent },
  { 
    path: 'contact-detail',
    component: ContactDetailComponent,
    resolve: {
      detail: DetailResolve,
    }
  }
];


