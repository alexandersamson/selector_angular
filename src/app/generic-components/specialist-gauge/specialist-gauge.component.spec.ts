import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialistGaugeComponent } from './specialist-gauge.component';

describe('SpecialistGaugeComponent', () => {
  let component: SpecialistGaugeComponent;
  let fixture: ComponentFixture<SpecialistGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialistGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialistGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
