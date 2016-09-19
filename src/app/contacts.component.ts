import { Component, OnInit } from '@angular/core';
import {Contact} from './models/contact';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: 'contacts.component.html',
  //template: '<trm-contacts-header></trm-contacts-header> ', 
  styleUrls: ['contacts.component.css']
})
export class ContactsAppComponent implements OnInit{
  
  contacts:Contact[];
  constructor(private contactsService: ContactsService){
    
  }

  ngOnInit(){
    this.contacts = this.contactsService.getContacts();
  }

  title = 'Angular 2 Master Class setup works!';
}
