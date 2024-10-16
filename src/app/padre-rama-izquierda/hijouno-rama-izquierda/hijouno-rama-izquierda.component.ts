import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hijouno-rama-izquierda',
  templateUrl: './hijouno-rama-izquierda.component.html',
  styleUrls: ['./hijouno-rama-izquierda.component.css']
})
export class HijounoRamaIzquierdaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log('time out')
    }, 4000);
  }
 
  contador=0
  ngDoCheck(): void {
    
    this.contador++;
    console.log(`ngDoCheck se ha ejecutado HijounoRamaIzquierdaComponen ${this.contador}`);
  }
}
