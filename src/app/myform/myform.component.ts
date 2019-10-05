import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.searchtest();
  }

  searchtest(){
    let searchBox=document.getElementById("search");
    const typeahead = fromEvent(searchBox, 'input').pipe(
        map((e: KeyboardEvent) => e.target.value),
        //filter(text => text.length > 2),
        debounceTime(2000),
        distinctUntilChanged(),

      )
     typeahead.subscribe(data => {
       console.log(data);
       var elem=this.foo(data);
       console.log(elem.join(""));
});
  }
  foo(arr){
    return Array.from(new Set(arr))  // Array.from方法可以将 Set 结构转为数组
}


}