import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CryptoCardComponent} from './cards/crypto-card/crypto-card.component';
import {CryptoListComponent} from './pages/crypto-list/crypto-list.component';
import {HttpClientModule} from '@angular/common/http';
import {DetailsComponent} from './pages/details/details.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import {CandlesticksCardComponent} from './cards/candlesticks-card/candlesticks-card.component';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptoCardComponent,
    CryptoListComponent,
    DetailsComponent,
    CandlesticksCardComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgApexchartsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
