import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BirdsListPage } from './birds-list.page';

const routes: Routes = [
  {
    path: '',
    component: BirdsListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BirdsListPageRoutingModule {}
