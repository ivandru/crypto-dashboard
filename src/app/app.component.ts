import {Component, OnInit} from '@angular/core';
import {SettingsService} from './services/settings/settings.service';
import {Router} from '@angular/router';
import {AvailableFiat} from './models/settings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  fiat: AvailableFiat;

  constructor(
    public settings: SettingsService,
    public router: Router
  ) {

  }

  ngOnInit() {
    this.settings.fiat.subscribe((value) => {
      this.fiat = value;
    });
  }

  toggleFiat() {
    this.settings.toggleCurrency();
  }

  goToHome() {
    this.router.navigateByUrl('');
  }
}
