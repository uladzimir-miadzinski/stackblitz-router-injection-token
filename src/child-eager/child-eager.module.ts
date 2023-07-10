import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildEagerComponent } from './child-eager.component';
import { HelloService } from '../hello.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChildEagerComponent
      }
    ])
  ],
  declarations: [
    ChildEagerComponent
  ],
  exports: [
    ChildEagerComponent
  ],
  providers: [
    HelloService
  ]
})
export class ChildEagerModule { }