import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre-ramatre',
  templateUrl: './padre-ramatre.component.html',
  styleUrls: ['./padre-ramatre.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PadreRamatreComponent implements OnInit {
  contador=0
  constructor() { }

  ngOnInit(): void {
  }
  
  
  hola() {
    console.log('hola')
   }
  
  ngDoCheck(): void {
    this.contador++;
    console.log(`ngDoCheck se ha ejecutado PadreunoRamaIzquierdaComponent ${this.contador}`);
  }
}
