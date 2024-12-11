import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoChevroletHuachiComponent } from './info-chevrolet-huachi.component';

describe('InfoChevroletHuachiComponent', () => {
  let component: InfoChevroletHuachiComponent;
  let fixture: ComponentFixture<InfoChevroletHuachiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoChevroletHuachiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoChevroletHuachiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
