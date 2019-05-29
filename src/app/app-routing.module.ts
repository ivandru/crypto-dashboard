import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CryptoListComponent} from './pages/crypto-list/crypto-list.component';
import {DetailsComponent} from './pages/details/details.component';
import {HomeComponent} from './pages/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cryptos', component: CryptoListComponent},
  {path: 'candlesticks/:crypto', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
