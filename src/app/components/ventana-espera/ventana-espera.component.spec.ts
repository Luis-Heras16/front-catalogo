import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentanaEsperaComponent } from './ventana-espera.component';

describe('VentanaEsperaComponent', () => {
  let component: VentanaEsperaComponent;
  let fixture: ComponentFixture<VentanaEsperaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentanaEsperaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentanaEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
