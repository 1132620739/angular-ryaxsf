import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor(private el:ElementRef) { }

  @HostListener('click') onClick(){
    console.log(this.el.nativeElement);
  }

}