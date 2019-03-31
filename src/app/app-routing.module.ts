import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {DetailsComponent} from './pages/details/details.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'candlesticks/:crypto', component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
