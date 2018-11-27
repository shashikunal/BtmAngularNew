import { Component } from "@angular/core";

@Component({
    selector:'courses',
    template :`
    <div class="container">
        {{title}}

        <ul class="list-group mt-2" *ngFor="let course of courses">
            <li class="list-group-item">{{course}}</li>  
        </ul>

        <button class="btn btn-info" [class.active]="isActive">submit</button>
        <button [style.backgroundColor]="isActive ? 'blue': 'red'">submit2</button>

        <button class="btn btn-success" (click)="onSave($event)">submit</button>
        <input type="text" #name (keyup.enter)="onkeyUp(name.value)" class="form-control"/>

        <input class="form-control" type="text" [(ngModel)]="username" />
        {{username}}

       <h1> {{users.name | uppercase}} </h1>
       <h1> {{users.salary | currency :'INR' : true}}</h1>
       <h1> {{users.designation | lowercase}}</h1>
       <h1>{{users.dateofjoin | date : 'shortDate'}}</h1>
       <h1>{{users.rating | number:'2.2-2'}}</h1>
       <h1> {{text|summary}} </h1>

       <div *ngIf='languages.length > 0; then courses else nocourse'></div>

       <ng-template #courses>
            courses are here
       </ng-template>

       <ng-template #nocourse>
            nocourse here
       </ng-template>

    </div>
    `
})
export class CourseComponent{
    languages = [1];


    text = `
    Why do we use it?
    It is a long established fact that a reader
    will be distracted by the readable content of a
    page when looking at its layout. The point of using
    Lorem Ipsum is that it has a more-or-less normal 
    distribution of letters, as opposed to using 'Content here,
    content here', making it look like readable English.
    Many desktop publishing packages and web page.
    
    
    `

     users = {
         name : "shashi",
         salary : 40000,
         designation : 'web developer',
         dateofjoin : new Date('2015/05/10');
         rating : 4000
     }


    onkeyUp(name){
        console.log('enter was pressed' , name);
    }

    onSave($event){
        console.log('button was clicked' , $event);
    }
    
isActive = false;    
title = "hello angular";
courses = ["java" , "python" , "nodejs"];

}