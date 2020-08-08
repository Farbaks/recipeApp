import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeCustomListPageRoutingModule } from './recipe-custom-list-routing.module';

import { RecipeCustomListPage } from './recipe-custom-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeCustomListPageRoutingModule
  ],
  declarations: [RecipeCustomListPage]
})
export class RecipeCustomListPageModule {}
