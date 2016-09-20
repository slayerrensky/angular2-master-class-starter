import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Contact} from '../models/contact';
import { ContactsService } from '../contacts.service';


@Component({
  selector: 'trm-contacts-editor',
  templateUrl: 'contacts-editor.component.html',
  styleUrls: ['contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {

  contact:Contact = <Contact> {address:{}};
  id:number = null;

  constructor(private route: ActivatedRoute, private contactsService:ContactsService, private router:Router) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.contactsService.getContact(this.id)
      .subscribe(contact => this.contact = contact);
  }
  
  save() {
    this.contactsService.updateContact(this.id, this.contact)
      .subscribe(contact => { 
        this.contact = contact; 
        this.router.navigate(['/contact', this.id])
      }
        );
      
  }

  cancel(contact: Contact){
     this.router.navigate(['/contact', this.id]); 
  } 
}
