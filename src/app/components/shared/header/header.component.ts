import { Component } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-header',
  imports: [BsDropdownModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent { }
