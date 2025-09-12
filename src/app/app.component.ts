import { Component, inject, OnInit, ViewChild } from '@angular/core';
import {
  NavigationCancel, NavigationEnd, NavigationError,
  NavigationStart, Router, RouterOutlet, type Event
} from '@angular/router';
import {
  NgProgressComponent,
  NgProgressModule,
  type NgProgressRef,
} from 'ngx-progressbar'
import { TitleService } from './core/services/title.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgProgressModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private readonly titleService = inject(TitleService);

  progressRef!: NgProgressRef
  @ViewChild(NgProgressComponent) progressBar!: NgProgressComponent

  private readonly router = inject(Router)

  constructor() {
    this.router.events.subscribe((event: Event) => {
      this.checkRouteChange(event)
    })
  }

  ngOnInit(): void {
    this.titleService.init()
  }

  checkRouteChange(routerEvent: Event) {
    if (routerEvent instanceof NavigationStart) {
      this.progressBar.start()
    }
    if (
      routerEvent instanceof NavigationEnd ||
      routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError
    ) {
      setTimeout(() => {
        this.progressBar.complete()
      }, 200)
    }
  }
}
