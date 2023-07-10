import { Component } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-child-eager',
  template: `
    <h1>Child Eager component</h1>
  `,
})
export class ChildEagerComponent {
  constructor(private hello: HelloService) {
    hello.hi();
  }
}