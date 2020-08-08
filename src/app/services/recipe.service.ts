import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewReviewPage } from '../component/new-review/new-review.page';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(public modalController: ModalController) {
    
  }

  async showNewReviewModal(type, typeId, userId) {
    const modal = await this.modalController.create({
      component: NewReviewPage,
      // cssClass: 'my-custom-class',
      componentProps: {
        'type': type,
        'id': typeId,
        'userId': userId
      }
    });
    return await modal.present();
  }

}
