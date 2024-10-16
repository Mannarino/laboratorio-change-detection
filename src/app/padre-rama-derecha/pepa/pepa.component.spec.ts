import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PepaComponent } from './pepa.component';

describe('PepaComponent', () => {
  let component: PepaComponent;
  let fixture: ComponentFixture<PepaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PepaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PepaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
