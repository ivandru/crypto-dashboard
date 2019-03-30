import {Injectable} from '@angular/core';
import {AvailableFiat} from '../../model/settings.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  public fiat: AvailableFiat = AvailableFiat.USD;

  constructor() {

  }

  toggleCurrency() {
    // TODO (ivandru): Refactor this
    if (this.fiat === AvailableFiat.UAH) {
      this.fiat = AvailableFiat.USD;
    } else if (this.fiat === AvailableFiat.USD) {
      this.fiat = AvailableFiat.UAH;
    }
  }
}
