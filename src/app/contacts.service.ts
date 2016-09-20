import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import {CONTACT_DATA} from './data/contact-data';
import {Contact} from './models/contact';
import 'rxjs/add/operator/map';


@Injectable()
export class ContactsService {
  
  contacts:Array<Contact> = null;
        
  constructor(private http:Http, @Inject('apiUrl') private apiUrl){
  }

  getContacts() {
    //return CONTACT_DATA;
    return this.http.get(`${this.apiUrl}/contacts`)
      .map(res => res.json())
      .map(data => data.items);
  }

  getContact(id: number|string) {
    //return this.getContacts().find(contact => contact.id == id);
    return this.http.get(`${this.apiUrl}/contacts/${id}`)
      .map(res => res.json())
      .map(data => data.item);
  }
  
   updateContact(id:number, contact: Contact) {
       return this.http.put(`${this.apiUrl}/contacts/${id}`, contact)
        .map(res => res.json())
        .map(data => data.item);
           
   }

   search(term: string) {
     return this.http.get(`${this.apiUrl}/search?text=${term}`)
        .map(res => res.json())
        .map(data => data.items);
   } 
}
