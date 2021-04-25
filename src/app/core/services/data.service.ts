import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TranslocoService } from '@ngneat/transloco';


/**
 * Service to store and access various data data across the website
 * BehaviorSubject was used to have ability to access value synchronously via getValue()
 * angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service
 */
@Injectable({ providedIn: 'root' })
export class DataService {
  public activeLang = this.translocoService.getActiveLang();
  public activeLangSubj = new BehaviorSubject('en');
  public activeLang$ = this.activeLangSubj.asObservable();

  public availableLangs = this.translocoService.getAvailableLangs();

  constructor(protected router: Router,
              protected translocoService: TranslocoService) {
    this.translocoService.langChanges$.subscribe((langKeyData) => {
      this.activeLang = langKeyData;
      this.activeLangSubj.next(langKeyData);
    });
  }

}
