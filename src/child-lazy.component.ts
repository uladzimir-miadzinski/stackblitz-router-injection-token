import { Component } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-child-lazy',
  standalone: true,
  template: `
    <h1>Child Lazy component</h1>
  `,
})
export class ChildLazyComponent {
  constructor(private hello: HelloService) {
    hello.hi();
  }
}