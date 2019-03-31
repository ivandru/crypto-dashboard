import {Injectable} from '@angular/core';
import {Adapter} from '../adapter/adapter';

export class FiatInfo {
  constructor(
    public symbol: string,
    public price: string
  ) {
  }
}

export class CryptoInfo {
  constructor(
    public id: string,
    public fullName: string,
    public name: string,
    public symbol: string,
    public imageUrl: string,
    public url: string,
    public algorithm: string,
    public proofType: string,
    public blockNumber: number,
    public fiat: FiatInfo,
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class CryptoInfoAdapter implements Adapter<CryptoInfo> {

  adapt(item: any): CryptoInfo {
    const fiat = Object.getOwnPropertyNames(item.RAW)[0];
    const rawData = item.RAW[fiat];

    return new CryptoInfo(
      item.CoinInfo.Id,
      item.CoinInfo.FullName,
      item.CoinInfo.Name,
      rawData.FROMSYMBOL,
      item.CoinInfo.ImageUrl,
      item.CoinInfo.Url,
      item.CoinInfo.Algorithm,
      item.CoinInfo.ProofType,
      item.CoinInfo.BlockNumber,
      new FiatInfo(
        rawData.TOSYMBOL,
        parseFloat(rawData.PRICE).toFixed(2),
      ),
    );
  }

}

@Injectable({
  providedIn: 'root'
})
export class ShortCoinInfoAdapter implements Adapter<CryptoInfo> {

  adapt(item: any): CryptoInfo {
    const c = Object.getOwnPropertyNames(item.DISPLAY)[0];
    const fiat = Object.getOwnPropertyNames(item.DISPLAY[c])[0];
    const disData = item.DISPLAY[c][fiat];
    const rawData = item.RAW[c][fiat];

    return new CryptoInfo(
      '',
      rawData.FROMSYMBOL,
      rawData.FROMSYMBOL,
      disData.FROMSYMBOL,
      disData.IMAGEURL,
      '',
      '',
      '',
      0,
      new FiatInfo(
        disData.TOSYMBOL,
        parseFloat(rawData.PRICE).toFixed(2),
      ),
    );
  }

}
