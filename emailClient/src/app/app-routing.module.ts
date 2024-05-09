import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: 'inbox',
    canLoad: [authGuard],
    loadChildren: () =>
      import('./inbox/inbox.module').then((mod) => mod.InboxModule),
  },
  {
    path: 'inbox',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
