import 'zone.js/dist/zone';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { routes } from "./app.routes";
import { provideRouter, RouterLink, RouterOutlet } from '@angular/router';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <h1>Hello from {{name}}!</h1>
    <router-outlet></router-outlet>
    <button 
      [routerLink]="''"
    >Home</button>
    <button 
      [routerLink]="'child-lazy'"
    >Child Lazy</button>
    <button 
      [routerLink]="'child-lazy-2'"
    >Child Lazy 2</button>
    <button 
      [routerLink]="'child-eager'"
    >Child Eager</button>
  `,
})
export class MainComponent {
  name = 'Angular';

  constructor(private hello: HelloService) {
    hello.hi();
  }
}

bootstrapApplication(MainComponent, {
  providers: [provideRouter(routes)]
});
