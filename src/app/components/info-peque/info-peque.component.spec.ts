import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPequeComponent } from './info-peque.component';

describe('InfoPequeComponent', () => {
  let component: InfoPequeComponent;
  let fixture: ComponentFixture<InfoPequeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPequeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPequeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
