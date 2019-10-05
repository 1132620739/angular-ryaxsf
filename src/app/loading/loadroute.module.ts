import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingComponent } from  './loading.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { 
              path: '', component: LoadingComponent,
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class LoadingRoutingModule { }