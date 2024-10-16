import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-hijodos-rama-izquierda',
  templateUrl: './hijodos-rama-izquierda.component.html',
  styleUrls: ['./hijodos-rama-izquierda.component.css']
})
export class HijodosRamaIzquierdaComponent implements OnInit {
  contador = 0
  
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form Submitted', this.myForm.value);
    }
  }
  ngOnInit(): void {
  }
  ngDoCheck(): void {
    this.contador++;
    console.log(`ngDoCheck se ha ejecutado HijodosRamaIzquierdaComponent ${this.contador}`);
    
  }
}
