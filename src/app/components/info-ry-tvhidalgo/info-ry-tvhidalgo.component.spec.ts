import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoRyTVHidalgoComponent } from './info-ry-tvhidalgo.component';

describe('InfoRyTVHidalgoComponent', () => {
  let component: InfoRyTVHidalgoComponent;
  let fixture: ComponentFixture<InfoRyTVHidalgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoRyTVHidalgoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoRyTVHidalgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
