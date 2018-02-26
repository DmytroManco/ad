import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AdService } from './features/services';
import { LoginService } from './core/login';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private adService: AdService,
              private loginService: LoginService) {
  }

  public ngOnInit() {
    this.adService.isAdExist();
    this.loginService.checkUsersExist();
  }
}
