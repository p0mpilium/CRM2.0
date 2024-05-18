import { bootstrapApplication } from '@angular/platform-browser';
import { CustomerListComponent } from './app/customer-list/customer-list.component';

bootstrapApplication(CustomerListComponent)
  .catch(err => console.error(err));
