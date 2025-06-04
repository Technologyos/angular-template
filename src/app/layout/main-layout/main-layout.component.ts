import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '@components/shared/header/header.component';
import { FooterComponent } from "../../components/shared/footer/footer.component";

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './main-layout.component.html'
})
export class MainLayoutComponent {}
