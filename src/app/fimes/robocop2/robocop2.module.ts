import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Robocop2PageRoutingModule } from './robocop2-routing.module';

import { Robocop2Page } from './robocop2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Robocop2PageRoutingModule
  ],
  declarations: [Robocop2Page]
})
export class Robocop2PageModule {}
