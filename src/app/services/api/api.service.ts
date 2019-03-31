import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CryptoInfo, CryptoInfoAdapter, ShortCoinInfoAdapter} from '../../models/coin-info.model';
import {map} from 'rxjs/operators';
import {Candlestick, CandlestickAdapter} from '../../models/candlestick.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseImageUrl = 'https://cryptocompare.com';
  public baseApiUrl = 'https://min-api.cryptocompare.com/data';

  constructor(public http: HttpClient,
              public coinAdapter: CryptoInfoAdapter,
              public candlestickAdapter: CandlestickAdapter,
              public detailedCoinInfoAdapter: ShortCoinInfoAdapter) {
  }

  getTopByVolume(fiat: 'USD' | 'UAH' = 'USD', limit: number = 10): Observable<CryptoInfo[]> {
    const url = `${this.baseApiUrl}/top/totalvolfull?limit=${limit}&tsym=${fiat}`;
    return this.http.get(url).pipe(
      // Adapt all elements to CryptoInfo
      map((data: {Data: any[]}) => data.Data.map(item => this.coinAdapter.adapt(item))),
    );
  }

  getTopByMarketCap(fiat: 'USD' | 'UAH' = 'USD', limit: number = 10): Observable<CryptoInfo[]> {
    const url = `${this.baseApiUrl}/top/mktcapfull?limit=${limit}&tsym=${fiat}`;
    return this.http.get(url).pipe(
      // Adapt all elements to CryptoInfo
      map((data: {Data: any[]}) => data.Data.map(item => this.coinAdapter.adapt(item))),
    );
  }

  getCandlesticks(
    crypto: string,
    fiat: 'USD' | 'UAH' = 'USD',
    period: 'minute' | 'hour' | 'day' = 'minute',
    limit: number = 10
  ): Observable<Candlestick[]> {
    // TODO (ivandru): The histo${period} hack is not sustainable. It's clean, but needs rethinking.
    const url = `${this.baseApiUrl}/histo${period}?limit=${limit}&tsym=${fiat}&fsym=${crypto}`;
    return this.http.get(url).pipe(
      // Adapt all elements to Candlestick
      map((data: {Data: any[]}) => data.Data.map(item => this.candlestickAdapter.adapt(item))),
    );
  }

  getSingleCryptoInfo(
    crypto: string,
    fiat: 'USD' | 'UAH' = 'USD',
  ): Observable<CryptoInfo> {
    // TODO (ivandru): The histo${period} hack is not sustainable. It's clean, but needs rethinking.
    const url = `${this.baseApiUrl}/pricemultifull?tsyms=${fiat}&fsyms=${crypto}`;
    return this.http.get(url).pipe(
      // Adapt all elements to CryptoInfo
      map((data) => this.detailedCoinInfoAdapter.adapt(data))
    );
  }


}
