import {Injectable} from '@angular/core';
import {AvailableFiat} from '../../models/settings.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public fiat: BehaviorSubject<AvailableFiat>;

  constructor() {
    this.fiat = new BehaviorSubject<AvailableFiat>(AvailableFiat.USD);
  }

  toggleCurrency() {
    // TODO (ivandru): Refactor this
    if (this.fiat.getValue() === AvailableFiat.UAH) {
      this.fiat.next(AvailableFiat.USD);
    } else if (this.fiat.getValue() === AvailableFiat.USD) {
      this.fiat.next(AvailableFiat.UAH);
    }
  }
}
