import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Vibration } from '@ionic-native/vibration/ngx';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.page.html',
  styleUrls: ['./recipe-item.page.scss'],
})
export class RecipeItemPage implements OnInit {
  rate:any;
  liked:boolean;
  type:string;
  typeId:number;
  userId:number;
  constructor(public toastController: ToastController, private vibration: Vibration, public recipeService: RecipeService) { 
    this.rate = "0";
    this.liked = false;
  }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 10000,
      cssClass: "toast_style",
      mode:"ios"
    });
    toast.present();
  }

  like() {
    this.vibration.vibrate(1000);
    // console.log('It vibrated');
    this.liked = !this.liked;
  }

  newRewiew() {
    this.recipeService.showNewReviewModal(this.type, this.typeId, this.userId);
  }

}
