import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RobocopPage } from './robocop.page';

const routes: Routes = [
  {
    path: '',
    component: RobocopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RobocopPageRoutingModule {}
