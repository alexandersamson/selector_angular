import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaugeStylesComponent } from './gauge-styles.component';

describe('GaugeStylesComponent', () => {
  let component: GaugeStylesComponent;
  let fixture: ComponentFixture<GaugeStylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaugeStylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaugeStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
