import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="clicked()">Click me!</button>
    <p>{{message}}</p>
  `
})
export class AppComponent {
  isOn = false;
  clicked() { this.isOn = !this.isOn; }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
}
