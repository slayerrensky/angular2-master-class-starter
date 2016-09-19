import { Injectable } from '@angular/core';
import {CONTACT_DATA} from './data/contact-data';
import {Contact} from './models/contact';

@Injectable()
export class ContactsService {
  
  contacts:Array<Contact> = null;

  getContacts() {
    return CONTACT_DATA;
  }

  getContact(id: number|string) {
    return this.getContacts().find(contact => contact.id == id);
  }

}
