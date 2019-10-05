import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageChange'
})
export class LanguageChangePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result:string="";
    switch(value){
      case "1":
      result="一";
      break;
      case "2":
      result="二";
      break;
    }
    return result;
  }

}