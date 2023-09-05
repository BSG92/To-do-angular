import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent implements OnInit {
  scrollToTop(){
    (function smoothScroll(){
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

      if(currentScroll > 300){
        window.requestAnimationFrame(smoothScroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }
    })();
  }
  
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
