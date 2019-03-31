import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CandlesticksCardComponent} from './candlesticks-card.component';

describe('CandlesticksCardComponent', () => {
  let component: CandlesticksCardComponent;
  let fixture: ComponentFixture<CandlesticksCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CandlesticksCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandlesticksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
