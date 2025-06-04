import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'auth-logo',
  imports: [RouterLink, CommonModule],
  templateUrl: './auth-logo.component.html'
})
export class AuthLogoComponent {}
