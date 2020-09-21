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
        loadChildren: () => import('src/app/pages/feed/feed.module').then(m => m.FeedPageModule),
        children: [
          {
            path: '',
            loadChildren: () => import('src/app/pages/feed/feed.module').then(m => m.FeedPageModule) 
          },
          {
            path: 'search/:query',
            loadChildren: () => import('src/app/pages/search-result/search-result.module').then(m => m.SearchResultPageModule)
          },
          {
            path: 'categories',
            loadChildren: () => import('src/app/pages/categories/categories.module').then(m => m.CategoriesPageModule)
          },
          {
            path: 'categories/:id',
            loadChildren: () => import('src/app/pages/recipe-category-list/recipe-category-list.module').then(m => m.RecipeCategoryListPageModule)
          },
          {
            path: 'custom-recipe-list/:listType',
            loadChildren: () => import('src/app/pages/recipe-custom-list/recipe-custom-list.module').then(m => m.RecipeCustomListPageModule)
          },
          {
            path: 'recipe/:id',
            loadChildren: () => import('src/app/pages/recipe-item/recipe-item.module').then(m => m.RecipeItemPageModule),
            children: [
              {
                path: '',
                loadChildren: () => import('src/app/pages/recipe-item/recipe-item.module').then(m => m.RecipeItemPageModule),
              },
              {
                path: 'reviews',
                loadChildren: () => import('src/app/pages/review-list/review-list.module').then(m => m.ReviewListPageModule),
              }
            ]
          },
          {
            path: 'user/:id',
            loadChildren: () => import('src/app/pages/user/user.module').then(m => m.UserPageModule),
            children: [
              {
                path: '',
                loadChildren: () => import('src/app/pages/user/user.module').then(m => m.UserPageModule),
              },
              {
                path: 'detail/:type',
                loadChildren: () => import('src/app/pages/userdetail/userdetail.module').then(m => m.UserdetailPageModule),
              },
            ]
          },
          {
            path: 'saved-by/:id',
            loadChildren: () => import('src/app/pages/saved-by/saved-by.module').then(m => m.SavedByPageModule),
          },
        ]
      },
      {
        path: 'notification',
        loadChildren: () => import('src/app/pages/notification/notification.module').then(m => m.NotificationPageModule),
        children: [
          {
            path: '',
            loadChildren: () => import('src/app/pages/notification/notification.module').then(m => m.NotificationPageModule),
          },
          {
            path: ':id',
            loadChildren: () => import('src/app/pages/notification-detail/notification-detail.module').then(m => m.NotificationDetailPageModule),
          },
        ]
      },
      {
        path: 'saves',
        loadChildren: () => import('src/app/pages/saves/saves.module').then(m => m.SavesPageModule),
        children: [
          {
            path: '',
            loadChildren: () => import('src/app/pages/saves/saves.module').then(m => m.SavesPageModule),
          },
        ]
      },
      {
        path: 'account',
        loadChildren: () => import('src/app/pages/account/account.module').then(m => m.AccountPageModule),
        children: [
          {
            path: '',
            loadChildren: () => import('src/app/pages/account/account.module').then(m => m.AccountPageModule),
          },
        ]
      },
      { 
        path: '', 
        loadChildren: () => import('src/app/pages/feed/feed.module').then(m => m.FeedPageModule) 
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
