import { ChangeDetectionStrategy,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {

  contador=0
  constructor() { }

  ngOnInit(): void {
  }
  
  
  hola() {
    console.log('hola')
   }
  
  
  ngDoCheck(): void {
    this.contador++;
    console.log(`ngDoCheck se ha ejecutado LoginComponent ${this.contador}`);
    
  }
  

}
