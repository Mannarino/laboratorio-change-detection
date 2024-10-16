import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitoComponent } from './tito.component';

describe('TitoComponent', () => {
  let component: TitoComponent;
  let fixture: ComponentFixture<TitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
