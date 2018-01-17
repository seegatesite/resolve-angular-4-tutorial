import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  detail:any;
  ngOnInit() {
    this.detail = this.route.snapshot.data['detail'];
  }

}
