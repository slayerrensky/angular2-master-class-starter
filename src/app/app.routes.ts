import { Routes } from '@angular/router';
import { ContactsListComponent } from './contacts-list';
import { ContactsDetailComponent } from './contacts-detail';
import { ContactsEditorComponent } from './contacts-editor';


 export const ContactsAppRoutes:Routes = [
    { path: '', component: ContactsListComponent },
    { path: 'contact/:id', component: ContactsDetailComponent },
    { path: 'contact/:id/edit', component: ContactsEditorComponent }
 ] 

