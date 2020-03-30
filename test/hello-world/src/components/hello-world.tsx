import { Component } from '@stencil/core';
import { HelloWorldText } from 'hello-world-text';

@Component({
  tag: 'hello-world',
  styleUrl: 'hello-world.css',
})
export class HelloWorld {
  render() {
    return HelloWorldText;
  }
}
