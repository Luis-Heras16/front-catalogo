import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoInncolComponent } from './info-inncol.component';

describe('InfoInncolComponent', () => {
  let component: InfoInncolComponent;
  let fixture: ComponentFixture<InfoInncolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoInncolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoInncolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
