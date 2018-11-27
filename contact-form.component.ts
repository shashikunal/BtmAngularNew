import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  log(username){
    console.log(username)
  }

  submit(form){
    console.log(form)
  }
  constructor() { }

  ngOnInit() {
  }

}
