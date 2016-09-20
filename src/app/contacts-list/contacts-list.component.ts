import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import {Contact} from '../models/contact';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts:Observable<Array<Contact>>;
  constructor(private contactsService: ContactsService){
    
  }

  ngOnInit(){
    this.contacts = this.contactsService.getContacts();
    //this.contactsService.getContacts()
    //  .subscribe(contacts => this.contacts = contacts);
  }

}
