import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CoinInfo} from '../../models/coin-info.model';
import {ApiService} from '../../services/api/api.service';

@Component({
  selector: 'app-crypto-card',
  templateUrl: './crypto-card.component.html',
  styleUrls: ['./crypto-card.component.css']
})
export class CryptoCardComponent implements OnInit, OnDestroy {

  @Input()
  crypto: CoinInfo;

  constructor(
    public api: ApiService,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.crypto.imageUrl = this.api.baseImageUrl + this.crypto.imageUrl;
  }

  ngOnDestroy() {
  }

  openDetails() {
    this.router.navigateByUrl(`/${crypto}`);
  }

}
