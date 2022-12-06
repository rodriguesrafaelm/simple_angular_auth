import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginGuard } from './autenticacao/login.guard';
import { AutenticacaoGuard } from './autenticacao/autenticacao.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canLoad: [LoginGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canLoad: [AutenticacaoGuard]
  },
  {
    path: 'user/:userName',
    loadChildren: () =>
      import('./user-profile/user-profile.module').then((m) => m.UserProfileModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
