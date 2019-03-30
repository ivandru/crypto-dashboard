import {Injectable} from '@angular/core';
import {Adapter} from '../adapter/adapter';

export class FiatInfo {
  constructor(
    public symbol: string,
    public price: string
  ) {
  }
}

export class CoinInfo {
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
export class CoinInfoAdapter implements Adapter<CoinInfo> {

  adapt(item: any): CoinInfo {
    const fiat = Object.getOwnPropertyNames(item.RAW)[0];
    const rawData = item.RAW[fiat];

    return new CoinInfo(
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
