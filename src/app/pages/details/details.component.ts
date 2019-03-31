import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../../services/api/api.service';
import {SettingsService} from '../../services/settings/settings.service';
import {Candlestick} from '../../models/candlestick.model';
import {AvailableFiat} from '../../models/settings.model';
import {CryptoInfo} from '../../models/coin-info.model';
import {CandlesticksData} from '../../cards/candlesticks-card/candlesticks-card.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  crypto: string;
  fiat: AvailableFiat;
  candlesticks: Candlestick[];
  candlesticksPeriod: 'minute' | 'hour' | 'day' = 'day';
  cryptoInfo: CryptoInfo;
  timeDeltas: any = {
    minute: 1000 * 60 * 60,
    hour: 1000 * 60 * 60 * 24,
    day: 1000 * 60 * 60 * 24 * 30,
  };
  mainCandlesticks: CandlesticksData[];
  brushCandlesticks: CandlesticksData[];

  constructor(
    public activeRouter: ActivatedRoute,
    public api: ApiService,
    public settings: SettingsService,
  ) {
  }

  ngOnInit() {
    this.settings.fiat.subscribe((value) => {
      this.fiat = value;
      this.loadCandles();
    });
  }

  loadCandles() {
    this.activeRouter.paramMap.subscribe((route: any) => {
      this.crypto = route.params.crypto;
      this.api.getSingleCryptoInfo(this.crypto, this.fiat)
        .subscribe((coinInfo: CryptoInfo) => {
          this.cryptoInfo = coinInfo;
        });

      this.api.getCandlesticks(
        this.crypto,
        this.fiat,
        this.candlesticksPeriod,
        150,
      ).subscribe((candlesticks: Candlestick[]) => {
        this.candlesticks = candlesticks;
        this.mainCandlesticks = [];
        this.brushCandlesticks = [];
        candlesticks.forEach((c: Candlestick) => {
          const time = new Date(c.time);
          this.mainCandlesticks.push({
            x: time,
            y: [c.open, c.high, c.low, c.close],
          });
          this.brushCandlesticks.push({
            x: time,
            y: [c.high],
          });
        });
      });
    });
  }
}

