import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./pages/forgotpassword/forgotpassword.module').then( m => m.ForgotpasswordPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'feed',
    loadChildren: () => import('./pages/feed/feed.module').then( m => m.FeedPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'recipe-category-list',
    loadChildren: () => import('./pages/recipe-category-list/recipe-category-list.module').then( m => m.RecipeCategoryListPageModule)
  },
  {
    path: 'recipe-custom-list',
    loadChildren: () => import('./pages/recipe-custom-list/recipe-custom-list.module').then( m => m.RecipeCustomListPageModule)
  },
  {
    path: 'recipe/:id',
    loadChildren: () => import('./pages/recipe-item/recipe-item.module').then( m => m.RecipeItemPageModule)
  },
  {
    path: 'review-list',
    loadChildren: () => import('./pages/review-list/review-list.module').then( m => m.ReviewListPageModule)
  },
  {
    path: 'new-review',
    loadChildren: () => import('./component/new-review/new-review.module').then( m => m.NewReviewPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'userdetail',
    loadChildren: () => import('./pages/userdetail/userdetail.module').then( m => m.UserdetailPageModule)
  },
  {
    path: 'saved-by',
    loadChildren: () => import('./pages/saved-by/saved-by.module').then( m => m.SavedByPageModule)
  },
  {
    path: 'search-result',
    loadChildren: () => import('./pages/search-result/search-result.module').then( m => m.SearchResultPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'notification-detail',
    loadChildren: () => import('./pages/notification-detail/notification-detail.module').then( m => m.NotificationDetailPageModule)
  },
  {
    path: 'saves',
    loadChildren: () => import('./pages/saves/saves.module').then( m => m.SavesPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'account-settings',
    loadChildren: () => import('./pages/account-settings/account-settings.module').then( m => m.AccountSettingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
