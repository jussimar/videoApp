import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Robocop2Page } from './robocop2.page';

const routes: Routes = [
  {
    path: '',
    component: Robocop2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Robocop2PageRoutingModule {}
