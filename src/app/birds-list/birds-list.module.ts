import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BirdsListPageRoutingModule } from './birds-list-routing.module';

import { BirdsListPage } from './birds-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BirdsListPageRoutingModule
  ],
  declarations: [BirdsListPage]
})
export class BirdsListPageModule {}
