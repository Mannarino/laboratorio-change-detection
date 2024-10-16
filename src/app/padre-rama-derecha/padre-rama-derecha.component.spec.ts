import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreRamaDerechaComponent } from './padre-rama-derecha.component';

describe('PadreRamaDerechaComponent', () => {
  let component: PadreRamaDerechaComponent;
  let fixture: ComponentFixture<PadreRamaDerechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreRamaDerechaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreRamaDerechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
