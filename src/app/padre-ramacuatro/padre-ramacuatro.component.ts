import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre-ramacuatro',
  templateUrl: './padre-ramacuatro.component.html',
  styleUrls: ['./padre-ramacuatro.component.css']
})
export class PadreRamacuatroComponent implements OnInit {

  contador=0
  constructor() { }

  ngOnInit(): void {
  }
  
  
 
  
  ngDoCheck(): void {
    this.contador++;
    console.log(`ngDoCheck se ha ejecutado PadreRamacuatroComponent ${this.contador}`);
  }

}
