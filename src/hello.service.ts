import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {

  constructor() {
    console.log('hello service created');
  }

  hi() {
    console.log('hi');
  }
}