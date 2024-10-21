import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreRamacuatroComponent } from './padre-ramacuatro.component';

describe('PadreRamacuatroComponent', () => {
  let component: PadreRamacuatroComponent;
  let fixture: ComponentFixture<PadreRamacuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreRamacuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreRamacuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
