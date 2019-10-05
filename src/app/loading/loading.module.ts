import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingRoutingModule } from './loadroute.module';
//以下是组件的导入
import { LoadingComponent } from './loading.component';


@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    LoadingRoutingModule
  ]
})
export class LoadingModule { }