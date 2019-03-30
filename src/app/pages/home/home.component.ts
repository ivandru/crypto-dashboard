import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api/api.service';
import {SettingsService} from '../../services/settings/settings.service';
import {CoinInfo} from '../../models/coin-info.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cryptos: CoinInfo[];

  constructor(
    public api: ApiService,
    public settings: SettingsService
  ) {
  }

  ngOnInit() {
    this.api.getTopByVolume(this.settings.fiat, 99).subscribe((cryptos: CoinInfo[]) => {
      this.cryptos = cryptos;
    });

  }
}
