import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserdetailPageRoutingModule } from './userdetail-routing.module';

import { UserdetailPage } from './userdetail.page';

import { SuperTabsModule } from '@ionic-super-tabs/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserdetailPageRoutingModule,
    SuperTabsModule,
  ],
  declarations: [UserdetailPage]
})
export class UserdetailPageModule {}
