import {Injectable} from '@angular/core';
import {Adapter} from '../adapter/adapter';

export class Candlestick {
  constructor(
    time: number,
    close: number,
    high: number,
    low: number,
    open: number,
    volumeFrom: number,
    volumeTo: number,
  ) {
  }
}


@Injectable({
  providedIn: 'root'
})
export class CandlestickAdapter implements Adapter<Candlestick> {

  adapt(item: any): Candlestick {
    return new Candlestick(
      item.time,
      item.close,
      item.high,
      item.low,
      item.open,
      item.volumefrom,
      item.volumeto,
    );
  }

}
