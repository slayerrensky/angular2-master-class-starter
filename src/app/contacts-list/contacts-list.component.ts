import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import {Contact} from '../models/contact';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/merge' 

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
    this.contacts = this.terms$.debounceTime(400)
                      .distinctUntilChanged()
                      .switchMap(term => this.contactsService.search(term)) // würd mit jeder suche gefeuert.
                      .merge(this.contactsService.getContacts()); //dieses observeble wird nur einmalig ausgefuehrt
  }
}
