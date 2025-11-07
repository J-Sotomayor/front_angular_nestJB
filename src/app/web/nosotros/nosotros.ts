import { Component } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  imports: [],
  template: `
    <h1>{{titulo}}</h1>
    <p>
      nosotros works!
    </p>
  `,
  styles: ``,
})
export class Nosotros {
  public titulo: string ="Acerca de nosotros"

}
