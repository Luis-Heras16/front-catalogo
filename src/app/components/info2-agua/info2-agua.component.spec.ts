import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Info2AguaComponent } from './info2-agua.component';

describe('Info2AguaComponent', () => {
  let component: Info2AguaComponent;
  let fixture: ComponentFixture<Info2AguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Info2AguaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Info2AguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
