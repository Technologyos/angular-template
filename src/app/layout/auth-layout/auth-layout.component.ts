import {
  Component,
  inject,
  Renderer2,
  type OnDestroy,
  type OnInit,
} from '@angular/core'

import { RouterModule } from '@angular/router'
import { AuthLogoComponent } from '@components/auth-logo/auth-logo.component'

@Component({
  selector: 'app-auth-layout',
  imports: [RouterModule, AuthLogoComponent],
  templateUrl: './auth-layout.component.html'
})
export class AuthLayoutComponent implements OnInit, OnDestroy {
  private renderer = inject(Renderer2)

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'h-100')
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'h-100')
  }
}
