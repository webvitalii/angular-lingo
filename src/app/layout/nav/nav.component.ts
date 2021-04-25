import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

import { DataService } from '@core/services/data.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private translocoService: TranslocoService,
              public dataService: DataService) { }

  ngOnInit(): void {
  }

  setActiveLang(langKey: string): void {
    this.translocoService.setActiveLang(langKey);
  }

}
