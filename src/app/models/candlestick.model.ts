import {Injectable} from '@angular/core';
import {Adapter} from '../adapter/adapter';

export class Candlestick {

  time: number;
  close: number;
  high: number;
  low: number;
  open: number;
  volumeFrom: number;
  volumeTo: number;

  constructor(
    time: number,
    close: number,
    high: number,
    low: number,
    open: number,
    volumeFrom: number,
    volumeTo: number,
  ) {
    this.time = time;
    this.close = close;
    this.high = high;
    this.low = low;
    this.open = open;
    this.volumeFrom = volumeFrom;
    this.volumeTo = volumeTo;
  }
}


@Injectable({
  providedIn: 'root'
})
export class CandlestickAdapter implements Adapter<Candlestick> {

  adapt(item: any): Candlestick {
    return new Candlestick(
      item.time * 1000,
      item.close,
      item.high,
      item.low,
      item.open,
      item.volumefrom,
      item.volumeto,
    );
  }

}
