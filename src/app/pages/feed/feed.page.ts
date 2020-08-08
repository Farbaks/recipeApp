import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  position:any;
  query:string;
  constructor(private http: HttpClient, private router: Router, public route:ActivatedRoute) { 
    this.position =window.pageYOffset;
    this.query="";
  }

  ngOnInit() {
  }

  
  logScrolling(event) {
    var scroll = event.detail.scrollTop;
    if(scroll > this.position && scroll > 100){
      document.getElementById('header').style.marginTop = "-67px";
    }
    else if(this.position > scroll && ((this.position - scroll) > 20 || scroll < 100) ){
      document.getElementById('header').style.marginTop = "0px";
    }
    this.position = scroll;
  }

  search() {
    console.log(this.query);
    this.router.navigate(['/tabs/feed/search/'+this.query]);
  }

}
