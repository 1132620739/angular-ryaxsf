//配置路由词典
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { MyformComponent } from './myform/myform.component';


const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'main',component:MainComponent},
  {path:'test',component:HttpTestComponent},
  {path:'form',component:MyformComponent},
  {path:'loading',
  loadChildren:'app/loading/loading.module#LoadingModule'}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class AppRoutingModule { }