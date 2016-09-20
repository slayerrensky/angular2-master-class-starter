import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {CONTACT_DATA} from './data/contact-data';
import {Contact} from './models/contact';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactsService {
  
  contacts:Array<Contact> = null;
  private API_ENDPOINT = "http://localhost:4201";      
  constructor(private http:Http){

  }

  getContacts() {
    //return CONTACT_DATA;
    return this.http.get(`${this.API_ENDPOINT}/api/contacts`)
      .map(res => res.json())
      .map(data => data.items);
  }

  getContact(id: number|string) {
    //return this.getContacts().find(contact => contact.id == id);
    return this.http.get(`${this.API_ENDPOINT}/api/contacts/${id}`)
      .map(res => res.json())
      .map(data => data.item);
  }
  
   updateContact(id:number, contact: Contact) {
       return this.http.put(`${this.API_ENDPOINT}/api/contacts/${id}`, contact)
        .map(res => res.json())
        .map(data => data.item);
           
   }
}
