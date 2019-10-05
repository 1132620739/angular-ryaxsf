import { Component, OnInit,ElementRef } from '@angular/core';
import {ServicetestService} from '../servicetest.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  array=[0,1,2,3,4]

  constructor(private el:ElementRef,private ser:ServicetestService) { }

  ngOnInit() {
   this.ser.test();
  }

  add(num){
    var elem=this.el.nativeElement;
    console.log(elem.children);
    console.log((elem.children)[num].querySelector(".price").innerHTML);
  
  }
  handle(data){
    console.log(data);
  }


}