import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:"login",
    loadComponent: ()=>import('./modules/auth/auth.component')
  },
  {
    path:"home",
    loadChildren: ()=>import('./modules/home/home.routes').then(m=> m.homeRoutes)
  },
  {
    path:"**",
    redirectTo:'login'
  }
];
