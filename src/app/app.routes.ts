import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    loadChildren: () => import('./views/views.route').then((mod) => mod.VIEWS_ROUTES),
  },
  {
    path: '**',
    redirectTo: ''
  }
];
