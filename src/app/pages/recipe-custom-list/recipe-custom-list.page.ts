import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-custom-list',
  templateUrl: './recipe-custom-list.page.html',
  styleUrls: ['./recipe-custom-list.page.scss'],
})
export class RecipeCustomListPage implements OnInit {
  pageTitle:any;
  listType:any;
  constructor(public route:ActivatedRoute) { 
    this.listType = this.route.snapshot.paramMap.get('listType');
    if(this.listType == "fast-n-easy"){
      this.pageTitle = "Fast n easy";
    }
    else {
      this.pageTitle = "Saved by friends";
    }
  }

  ngOnInit() {
  }

}
