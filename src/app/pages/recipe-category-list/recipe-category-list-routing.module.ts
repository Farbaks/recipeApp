import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeCategoryListPage } from './recipe-category-list.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeCategoryListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeCategoryListPageRoutingModule {}
