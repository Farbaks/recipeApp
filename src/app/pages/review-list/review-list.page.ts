import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Vibration } from '@ionic-native/vibration/ngx';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.page.html',
  styleUrls: ['./review-list.page.scss'],
})
export class ReviewListPage implements OnInit {

  rate:any;
  liked:boolean;
  recipe:any;
  type:string;
  typeId:number;
  userId:number;
  constructor(public toastController: ToastController, private vibration: Vibration, public route:ActivatedRoute, public recipeService: RecipeService) { 
    this.rate = "0";
    this.liked = false;
    this.recipe = this.route.snapshot.paramMap.get('id');
    // console.log(this.recipe);
  }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 10000,
      cssClass: "toast_style",
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
