import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoDecuatroComponent } from './hijo-decuatro.component';

describe('HijoDecuatroComponent', () => {
  let component: HijoDecuatroComponent;
  let fixture: ComponentFixture<HijoDecuatroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoDecuatroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoDecuatroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
