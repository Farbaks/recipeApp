import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.page.html',
  styleUrls: ['./new-review.page.scss'],
})
export class NewReviewPage implements OnInit {
  @Input() type: string;
  @Input() id: number;
  @Input() user: number;
  constructor(public modalController: ModalController) {
    
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
