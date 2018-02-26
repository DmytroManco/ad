import { Injectable } from '@angular/core';
import { Ad } from './ad.model';

@Injectable()
export class AdService {
  public ads: Ad[] = [];

  constructor() {
  }

  public isAdExist() {
    if (!localStorage.getItem('ads')) {
      this.initializeAds(15);
    }

    this.ads = JSON.parse(localStorage.getItem('ads'));
  }

  public makeAd(addId, adTitle, adDesc, author): Ad {
    return {
      id: addId,
      title: adTitle,
      description: adDesc,
      authorName: author,
      createdAt: new Date().toLocaleDateString()
    };
  }

  public addNewAd(ad: Ad): void {
    this.ads.unshift(ad);
    this.setAds(this.ads);
  }

  public deleteAd(id: number): void {
    const index = this.ads.findIndex((ad) => ad.id === id);

    this.ads.splice(index, 1);
    this.setAds(this.ads);
  }

  private initializeAds(amount: number): void {
    for (let i = 1; i < amount; i++) {
      this.ads.push(this.makeAd(i, `Add-${i}`, `Example Add ${i}`, 'Test'));
    }

    this.setAds(this.ads);
  }

  private setAds(ads): void {
    localStorage.setItem('ads', JSON.stringify(ads));
  }
}
