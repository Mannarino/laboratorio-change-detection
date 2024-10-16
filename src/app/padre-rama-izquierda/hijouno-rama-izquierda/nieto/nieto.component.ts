import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  contador=0
  ngDoCheck(): void {
    
    this.contador++;
    console.log(`ngDoCheck se ha ejecutado NietoComponent ${this.contador}`);
  }
}
