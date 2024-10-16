import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijounoRamaIzquierdaComponent } from './hijouno-rama-izquierda.component';

describe('HijounoRamaIzquierdaComponent', () => {
  let component: HijounoRamaIzquierdaComponent;
  let fixture: ComponentFixture<HijounoRamaIzquierdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijounoRamaIzquierdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijounoRamaIzquierdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
