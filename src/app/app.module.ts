import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header';
import { ContactsService } from './contacts.service';
import { ContactsAppRoutes } from './app.routes';
import { ContactsListComponent } from './contacts-list';
import { ContactsDetailComponent } from './contacts-detail';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListComponent,
    ContactsDetailComponent ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(ContactsAppRoutes)],
  providers: [ContactsService],
  bootstrap: [ContactsAppComponent],
  
})
export class ContactsModule {

}
