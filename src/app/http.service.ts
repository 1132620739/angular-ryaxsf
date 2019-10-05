import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class HttpService {

  constructor(private http:HttpClient) { }

  getData(url:string){
    return this.http.get(url,{withCredentials:true});
  }
  //读取完整响应体
  getAllData(url:string){
    return this.http.get(url,{observe:'response'});
  }

  //错误处理
  handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error("An error occurred:",error.error.message);
    }
    else{
      console.error(
        `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`)
    }
    return throwError('Something bad happened; please try again later.');
  }


}