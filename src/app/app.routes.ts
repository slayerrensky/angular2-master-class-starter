import { ContactsListComponent } from './contacts-list'
import { ContactsDetailComponent } from './contacts-detail'
import { Routes } from '@angular/router'

 export const ContactsAppRoutes:Routes = [
    { path: '', component: ContactsListComponent },
    { path: 'contact/:id', component: ContactsDetailComponent }
 ] 

