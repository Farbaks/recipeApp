import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavedByPage } from './saved-by.page';

const routes: Routes = [
  {
    path: '',
    component: SavedByPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavedByPageRoutingModule {}
