import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGayaComponent } from './info-gaya.component';

describe('InfoGayaComponent', () => {
  let component: InfoGayaComponent;
  let fixture: ComponentFixture<InfoGayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoGayaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoGayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
