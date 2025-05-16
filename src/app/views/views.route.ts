import type { Route } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent } from './auth/login/login.component'

export const VIEWS_ROUTES: Route[] = [
  {
    path: '',
    component: DashboardComponent,
    data: { title: 'Dahboard' },
  },
]
