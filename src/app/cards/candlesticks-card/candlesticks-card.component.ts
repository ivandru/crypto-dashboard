import {Component, Input, OnInit} from '@angular/core';

export class CandlesticksData {
  x: Date;
  y: number[];
}

@Component({
  selector: 'app-candlesticks-card',
  templateUrl: './candlesticks-card.component.html',
  styleUrls: ['./candlesticks-card.component.css']
})
export class CandlesticksCardComponent implements OnInit {

  @Input()
  mainData: CandlesticksData[];
  @Input()
  brushData: CandlesticksData[];
  @Input()
  defaultSelectedTimeEnd: number;
  @Input()
  fiatSymbol: string;
  config: any = {
    main: {
      chart: {
        id: 'candles',
        height: 290,
        type: 'candlestick',
        fontFamily: 'Orbitron',
        toolbar: {
          autoSelected: 'pan',
          show: false
        },
        zoom: {
          enabled: false
        },
      },
      x: {
        type: 'datetime',
      },
      y: {
        labels: {
          show: true,
          formatter: (val: number): string => {
            return `${this.fiatSymbol} ${val.toFixed(2)}`;
          },
        },
      },
    },
    brush: {
      chart: {
        height: 160,
        type: 'bar',
        fontFamily: 'Orbitron',
        brush: {
          enabled: true,
          target: 'candles'
        },
        selection: {
          enabled: true,
          fill: {
            color: '#ccc',
            opacity: 0.4
          },
          stroke: {
            color: '#0D47A1',
          }
        },
      },
      plot: {
        bar: {
          columnWidth: '80%',
          colors: {
            ranges: [
              {
                from: -1000,
                to: 0,
                color: '#F15B46'
              }, {
                from: 1,
                to: 10000,
                color: '#FEB019'
              }
            ],

          },
        }

      },
      x: {
        type: 'datetime',
        axisBorder: {
          offsetX: 13
        }
      },
      y: {
        labels: {
          show: true,
          formatter: (val: number): string => {
            return `${this.fiatSymbol} ${val.toFixed(2)}`;
          },
        }
      },
    },
  };

  constructor() {
  }

  ngOnInit() {
    this.config.brush.chart.selection.xaxis = {
      min: (new Date().getTime() - this.defaultSelectedTimeEnd),
      max: new Date().getTime(),
    };
  }

}
