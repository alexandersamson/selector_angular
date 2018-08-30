import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointsGaugeComponent } from './points-gauge.component';

describe('PointsGaugeComponent', () => {
  let component: PointsGaugeComponent;
  let fixture: ComponentFixture<PointsGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointsGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointsGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
