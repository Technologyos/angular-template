import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-logo-box',
  imports: [RouterLink, CommonModule],
  templateUrl: './logo-box.component.html'
})
export class LogoBoxComponent {}
