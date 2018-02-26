import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ad, AdService } from '../services';
import { LoginService, User } from '../../core/login';
import 'rxjs/add/observable/of';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public ads: Ad[];
  public page: number = 1;
  public user: User;

  private subscriptions: Subscription[] = [];

  constructor(private adService: AdService,
              private loginService: LoginService,
              private router: Router) {
  }

  public ngOnInit() {
    this.ads = this.adService.ads;
    this.subscriptions.push(this.loginService.getUser()
      .subscribe((user: User) => this.user = user));
  }

  public ngOnDestroy() {
    this.subscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

  public navigateToAdd(): void {
    this.router.navigate(['add']);
  }

  public navigateToView(id: number): void {

    this.router.navigate([`${id}`]);
  }

  public deleteAdd(id: number): void {
    this.adService.deleteAd(id);
  }
}
