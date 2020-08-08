import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.page.html',
  styleUrls: ['./userdetail.page.scss'],
})
export class UserdetailPage implements OnInit {
  type: string;
  activeTab: number;
  constructor(public route: ActivatedRoute) {
    this.type = this.route.snapshot.paramMap.get('type');
    
    switch (this.type) {
      case 'recipes': {
        this.activeTab=0;
        break;
      }
      case 'saves': {
        this.activeTab=1;
        break;
      }
      case 'following': {
        this.activeTab=0;
        break;
      }
      case 'followers': {
        this.activeTab=1;
        break;
      }
      default: {
        
        break;
      }
    }
  }

  ngOnInit() {
  }

}
