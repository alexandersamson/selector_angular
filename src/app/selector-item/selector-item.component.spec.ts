import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorItemComponent } from './selector-item.component';

describe('SelectorItemComponent', () => {
  let component: SelectorItemComponent;
  let fixture: ComponentFixture<SelectorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
