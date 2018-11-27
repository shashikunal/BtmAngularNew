import { Component } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  posts: any[];
  constructor(http :Http) {
    http.get('https://api.github.com/users').subscribe(function(item){
    console.log(item.json())
      this.posts = item.json();
    })
   }


}
