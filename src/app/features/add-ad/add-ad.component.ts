import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Ad, AdService } from '../services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService, User } from '../../core/login';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.component.html',
  styleUrls: ['./add-ad.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddAdComponent implements OnInit {
  public addForm: FormGroup;

  constructor(private adService: AdService,
              private loginService: LoginService,
              private fb: FormBuilder,
              private router: Router) {
  }

  public ngOnInit() {
    this.addForm = this.initForm();
    console.log(this.loginService.getUserName());
  }

  public submitForm(formValue): void {
    const newAd: Ad = {
      id: this.adService.ads.length + 1,
      title: formValue.title,
      description: formValue.description,
      authorName: this.loginService.getUserName(),
      createdAt: new Date().toLocaleDateString()
    };

    this.adService.addNewAd(newAd);
    this.router.navigate(['']);
  }

  private initForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
}
