import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chande-detection';
  contador=0
  constructor() { }

 
 
  
  ngDoCheck(): void {
    this.contador++;
    console.log(`ngDoCheck se ha ejecutado app component ${this.contador}`);
  }
}
