import { Component } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-child-eager',
  standalone: true,
  template: `
    <h1>Child Eager component</h1>
  `,
})
export class ChildEagerComponent {
  constructor(private hello: HelloService) {
    hello.hi();
  }
}