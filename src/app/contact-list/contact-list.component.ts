import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  contact:any;
  ngOnInit() {
    console.log(this.route.snapshot.data['contact']);   
    this.contact = this.route.snapshot.data['contact'];
  }

}
