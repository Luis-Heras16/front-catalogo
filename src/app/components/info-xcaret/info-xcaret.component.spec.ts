import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoXcaretComponent } from './info-xcaret.component';

describe('InfoXcaretComponent', () => {
  let component: InfoXcaretComponent;
  let fixture: ComponentFixture<InfoXcaretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoXcaretComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoXcaretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
