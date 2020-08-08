import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeCustomListPage } from './recipe-custom-list.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeCustomListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeCustomListPageRoutingModule {}
