import { Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { filter } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  constructor(
    private readonly titleService: Title,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  init(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateTitle()
      })
  }

  private updateTitle(): void {
    let route = this.activatedRoute
    while (route.firstChild) {
      route = route.firstChild
    }

    if (route.snapshot.data['title']) {
      this.titleService.setTitle(
        route.snapshot.data['title'] + ' | Technologyos - Admin Dashboard'
      )
    }
  }
}
