import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeCategoryListPageRoutingModule } from './recipe-category-list-routing.module';

import { RecipeCategoryListPage } from './recipe-category-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeCategoryListPageRoutingModule
  ],
  declarations: [RecipeCategoryListPage]
})
export class RecipeCategoryListPageModule {}
