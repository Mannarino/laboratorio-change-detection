import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre-rama-izquierda',
  templateUrl: './padre-rama-izquierda.component.html',
  styleUrls: ['./padre-rama-izquierda.component.css']
})
export class PadreRamaIzquierdaComponent implements OnInit {
  contador=0
  constructor() { }

  ngOnInit(): void {
  }
 
  
  ngDoCheck(): void {
    this.contador++;
    console.log(`ngDoCheck se ha ejecutado PadreunoRamaIzquierdaComponent ${this.contador}`);
  }
}
