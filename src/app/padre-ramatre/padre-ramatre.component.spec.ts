import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreRamatreComponent } from './padre-ramatre.component';

describe('PadreRamatreComponent', () => {
  let component: PadreRamatreComponent;
  let fixture: ComponentFixture<PadreRamatreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreRamatreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreRamatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
