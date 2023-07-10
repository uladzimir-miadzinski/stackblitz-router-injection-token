import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() {
    console.log('hello service created');
  }

  hi() {
    console.log('hi');
  }
}