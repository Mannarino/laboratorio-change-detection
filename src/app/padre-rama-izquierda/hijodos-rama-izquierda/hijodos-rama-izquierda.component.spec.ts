import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijodosRamaIzquierdaComponent } from './hijodos-rama-izquierda.component';

describe('HijodosRamaIzquierdaComponent', () => {
  let component: HijodosRamaIzquierdaComponent;
  let fixture: ComponentFixture<HijodosRamaIzquierdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijodosRamaIzquierdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijodosRamaIzquierdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
