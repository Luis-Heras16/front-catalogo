import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNubyeComponent } from './info-nubye.component';

describe('InfoNubyeComponent', () => {
  let component: InfoNubyeComponent;
  let fixture: ComponentFixture<InfoNubyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoNubyeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoNubyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
