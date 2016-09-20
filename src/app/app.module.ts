import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactsAppComponent } from './contacts.component';
import { ContactsHeaderComponent } from './contacts-header';
import { ContactsService } from './contacts.service';
import { ContactsAppRoutes } from './app.routes';
import { ContactsListComponent } from './contacts-list';
import { ContactsDetailComponent } from './contacts-detail';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsHeaderComponent,
    ContactsListComponent,
    ContactsDetailComponent, ContactsEditorComponent ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(ContactsAppRoutes),
    HttpModule,
    FormsModule],
  providers: [ContactsService],
  bootstrap: [ContactsAppComponent],
  
})
export class ContactsModule {

}
