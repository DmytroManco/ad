import { Component, OnInit } from '@angular/core';
import { Ad, AdService } from '../services';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-add',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent implements OnInit {
  public ad: Ad;
  public adId: number;

  private subscriptions: Subscription[];

  constructor(private adService: AdService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  public ngOnInit() {
    this.getAd(Number(this.route.snapshot.params['id']));
    console.log(this.ad);
  }

  private getAd(id: number) {
    const ads: Ad[] = JSON.parse(localStorage.getItem('ads'));

    if (!ads.find((ad: Ad) => ad.id === id)) {
      this.router.navigate(['']);
    }

    this.ad = ads.find((ad: Ad) => ad.id === id);
  }
}
