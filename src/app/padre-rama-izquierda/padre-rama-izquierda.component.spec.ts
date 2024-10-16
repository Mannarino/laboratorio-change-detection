import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreRamaIzquierdaComponent } from './padre-rama-izquierda.component';

describe('PadreRamaIzquierdaComponent', () => {
  let component: PadreRamaIzquierdaComponent;
  let fixture: ComponentFixture<PadreRamaIzquierdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreRamaIzquierdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreRamaIzquierdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
