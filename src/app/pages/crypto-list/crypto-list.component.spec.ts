import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CryptoListComponent} from './crypto-list.component';

describe('CryptoListComponent', () => {
  let component: CryptoListComponent;
  let fixture: ComponentFixture<CryptoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CryptoListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
