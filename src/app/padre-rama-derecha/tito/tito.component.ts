import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tito',
  templateUrl: './tito.component.html',
  styleUrls: ['./tito.component.css']
})
export class TitoComponent implements OnInit {
  contador=0
  constructor() { }

  ngOnInit(): void {
  }
 
  ngDoCheck(): void {
    this.contador++;
    console.log(`ngDoCheck se ha ejecutado titocomponen ${this.contador}`);
  }
}
