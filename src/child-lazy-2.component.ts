import { Component } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-child-lazy-2',
  standalone: true,
  template: `
    <h1>Child Lazy 2 component</h1>
  `,
})
export class ChildLazy2Component {
  constructor(private hello: HelloService) {
    hello.hi();
  }
}