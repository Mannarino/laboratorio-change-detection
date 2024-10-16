import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maria',
  templateUrl: './maria.component.html',
  styleUrls: ['./maria.component.css']
})
export class MariaComponent implements OnInit {
  contador=0
  constructor() { }

  ngOnInit(): void {
  }
 
    
  ngDoCheck(): void {   
      this.contador++;
      console.log(`ngDoCheck se ha ejecutado mariacomponent ${this.contador}`);
  }
}
