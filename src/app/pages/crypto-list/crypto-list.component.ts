import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {SettingsService} from '../../services/settings/settings.service';
import {CryptoInfo} from '../../models/coin-info.model';
import {AvailableFiat} from '../../models/settings.model';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit {

  cryptos: CryptoInfo[];
  fiat: AvailableFiat;

  constructor(
    public api: ApiService,
    public settings: SettingsService
  ) {
  }

  ngOnInit() {
    this.settings.fiat.subscribe((value) => {
      this.fiat = value;
      this.loadCryptos();
    });
  }


  loadCryptos() {
    console.log(this.fiat);
    this.api.getTopByVolume(this.fiat, 50).subscribe((cryptos: CryptoInfo[]) => {
      this.cryptos = cryptos;
    });
  }
}
