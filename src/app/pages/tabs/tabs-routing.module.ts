import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'feed',
        children: [
          {
            path: '',
            loadChildren: 'src/app/pages/feed/feed.module#FeedPageModule'
          },
          {
            path: 'search/:query',
            loadChildren: 'src/app/pages/search-result/search-result.module#SearchResultPageModule'
          },
          {
            path: 'categories',
            loadChildren: 'src/app/pages/categories/categories.module#CategoriesPageModule'
          },
          {
            path: 'categories/:id',
            loadChildren: 'src/app/pages/recipe-category-list/recipe-category-list.module#RecipeCategoryListPageModule'
          },
          {
            path: 'custom-recipe-list/:listType',
            loadChildren: 'src/app/pages/recipe-custom-list/recipe-custom-list.module#RecipeCustomListPageModule'
          },
          {
            path: 'custom-recipe-list/:listType',
            loadChildren: 'src/app/pages/recipe-custom-list/recipe-custom-list.module#RecipeCustomListPageModule'
          },
          {
            path: 'recipe/:id',
            loadChildren: 'src/app/pages/recipe-item/recipe-item.module#RecipeItemPageModule',
            children: [
              {
                path: '',
                loadChildren: 'src/app/pages/recipe-item/recipe-item.module#RecipeItemPageModule',
              },
              {
                path: 'reviews',
                loadChildren: 'src/app/pages/review-list/review-list.module#ReviewListPageModule',
              }
            ]
          },
          {
            path: 'user/:id',
            loadChildren: 'src/app/pages/user/user.module#UserPageModule',
            children: [
              {
                path: '',
                loadChildren: 'src/app/pages/user/user.module#UserPageModule'
              },
              {
                path: 'detail/:type',
                loadChildren: 'src/app/pages/userdetail/userdetail.module#UserdetailPageModule'
              },
            ]
          },
          {
            path: 'saved-by/:id',
            loadChildren: 'src/app/pages/saved-by/saved-by.module#SavedByPageModule'
          },
        ]
      },
      {
        path: '',
        redirectTo: 'feed',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
