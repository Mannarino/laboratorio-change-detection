import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pepa',
  templateUrl: './pepa.component.html',
  styleUrls: ['./pepa.component.css']
})
export class PepaComponent implements OnInit {
  contador=0
  constructor() { }

  ngOnInit(): void {
  }
 
  hola(){
    console.log('hola')
  }
    
  ngDoCheck(): void { 
      this.contador++;
      console.log(`ngDoCheck se ha ejecutado pepacomponent${this.contador}`);
  }
}
