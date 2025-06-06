import type { Route } from '@angular/router'
import { DashboardComponent } from './dashboard/dashboard.component'

export const VIEWS_ROUTES: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dahboard' },
  },
]
