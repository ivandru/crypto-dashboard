import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CryptoCardComponent} from './crypto-card.component';

describe('CryptoCardComponent', () => {
  let component: CryptoCardComponent;
  let fixture: ComponentFixture<CryptoCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
