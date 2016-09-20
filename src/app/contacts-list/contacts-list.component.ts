import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import {Contact} from '../models/contact';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged'

@Component({
  selector: 'trm-contacts-list',
  templateUrl: 'contacts-list.component.html',
  styleUrls: ['contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  private terms$ = new Subject<string>();

  contacts:Observable<Array<Contact>>;
  constructor(private contactsService: ContactsService){
    
  }

  ngOnInit(){
    this.contacts = this.contactsService.getContacts();
    //this.contactsService.getContacts()
    //  .subscribe(contacts => this.contacts = contacts);
    this.terms$.debounceTime(400)
               .distinctUntilChanged()
               .subscribe(term => this.search(term));
  }

  search(term:string) {
    this.contacts = this.contactsService.search(term);
  }
  
}
