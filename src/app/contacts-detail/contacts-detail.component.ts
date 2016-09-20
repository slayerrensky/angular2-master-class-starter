import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Contact} from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'trm-contacts-detail',
  templateUrl: 'contacts-detail.component.html',
  styleUrls: ['contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  
  contact:Contact = <Contact> {address:{}};
  id:number = null;

  constructor(private route: ActivatedRoute, private contactsService:ContactsService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.contactsService.getContact(this.id)
      .subscribe(contact => this.contact = contact);
  }

}
