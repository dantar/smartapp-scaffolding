import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrollable-page',
  templateUrl: './scrollable-page.component.html',
  styleUrls: ['./scrollable-page.component.scss']
})
export class ScrollablePageComponent implements OnInit {

  constructor() { }

  alist: string[];

  ngOnInit(): void {
    this.alist = [];
    for (let index = 0; index < 10; index++) {
      this.alist.push('paragraph ' + index);
      
    }
  }

}
