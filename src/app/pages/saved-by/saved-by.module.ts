import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedByPageRoutingModule } from './saved-by-routing.module';

import { SavedByPage } from './saved-by.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedByPageRoutingModule
  ],
  declarations: [SavedByPage]
})
export class SavedByPageModule {}
