import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalis',
  templateUrl: './detalis.component.html',
  styleUrls: ['./detalis.component.css']
})
export class DetalisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  contador=0
  ngDoCheck(): void {
    
    this.contador++;
    console.log(`ngDoCheck se ha ejecutado DetalisComponent ${this.contador}`);
  }
}
