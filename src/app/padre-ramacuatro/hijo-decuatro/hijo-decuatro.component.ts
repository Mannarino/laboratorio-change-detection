import { Component, NgZone, OnInit } from '@angular/core';


@Component({
  selector: 'app-hijo-decuatro',
  templateUrl: './hijo-decuatro.component.html',
  styleUrls: ['./hijo-decuatro.component.css']
})
export class HijoDecuatroComponent implements OnInit {

  contador=0

  intervalId: any;

  constructor(private ngZone: NgZone) {}
  ngOnInit(): void {
    setTimeout(() => {
      console.info('hola')
      clearInterval(this.intervalId);
    }, 19000);

    this.ngZone.runOutsideAngular(
      () =>{
      this.intervalId =setInterval(() => 
        { 
          
           console.info('corre interval')
        }, 1000) });
    
  

  }
  
  
 
  
  ngDoCheck(): void {
    this.contador++;
    console.log(`ngDoCheck se ha ejecutado HijoDecuatroComponent ${this.contador}`);
  }

}
