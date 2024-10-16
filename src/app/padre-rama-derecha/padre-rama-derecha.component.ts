import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre-rama-derecha',
  templateUrl: './padre-rama-derecha.component.html',
  styleUrls: ['./padre-rama-derecha.component.css']
})
export class PadreRamaDerechaComponent implements OnInit {
  
  contador=0
  
  constructor() { }

  ngOnInit(): void {
  }
  
 
 
  // ngDoCheck para detectar cambios
  ngDoCheck(): void {
      this.contador++; // Incrementa contador
      console.log(`ngDoCheck ejecutado  PadreRamaDerechaComponen ${this.contador} veces`);   
  }
}
