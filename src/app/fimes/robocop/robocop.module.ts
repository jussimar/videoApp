import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RobocopPageRoutingModule } from './robocop-routing.module';

import { RobocopPage } from './robocop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RobocopPageRoutingModule
  ],
  declarations: [RobocopPage]
})
export class RobocopPageModule {}
