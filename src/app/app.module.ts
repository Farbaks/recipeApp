import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { StarRatingModule } from 'ionic5-star-rating';
import { Vibration } from '@ionic-native/vibration/ngx';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
// import { RecipeService } from './services/recipe.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    StarRatingModule,
    SuperTabsModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    // RecipeService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
