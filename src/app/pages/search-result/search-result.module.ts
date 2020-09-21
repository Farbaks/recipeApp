import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchResultPageRoutingModule } from './search-result-routing.module';

import { SearchResultPage } from './search-result.page';

import { SuperTabsModule } from '@ionic-super-tabs/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperTabsModule,
    SearchResultPageRoutingModule
  ],
  declarations: [SearchResultPage]
})
export class SearchResultPageModule {}
