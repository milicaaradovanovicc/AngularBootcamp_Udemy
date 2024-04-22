import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingupComponent } from './singup/singup.component';
import { SinginComponent } from './singin/singin.component';

const routes: Routes = [
  { path: 'singup', component: SingupComponent },
  { path: '', component: SinginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
