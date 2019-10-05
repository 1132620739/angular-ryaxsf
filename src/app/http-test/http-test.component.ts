import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {
  objectKeys = Object.keys;
  member={name:'Tom',age:12,gender:"man"};
  items=[
    {name:"Tom"},{name:"Jerry"},{name:"Bob"}
  ]

  constructor(private httpservice:HttpService) { }

  ngOnInit() {
  }

  getData1(){
    this.httpservice.getData("http://localhost/user/login?uname=aaa")
    .subscribe((result:any)=>{
      console.log(result);
    })
  }
  getVal(){
    return 10;
  }

  study(obj:any){
    console.log(obj.target);
    console.log(obj.target.innerHTML)
  }

  trackByIndex(index,item){
    return index
  }

  changeItem(){
    this.items.push({name:"xxx"});
  }



}