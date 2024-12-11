import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCipsaComponent } from './info-cipsa.component';

describe('InfoCipsaComponent', () => {
  let component: InfoCipsaComponent;
  let fixture: ComponentFixture<InfoCipsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoCipsaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCipsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
