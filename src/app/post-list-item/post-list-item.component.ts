import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() date: string;
  loveIts: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onLoveIts() {  
    this.loveIts = this.loveIts +1;
    console.log("Love it!" + this.loveIts);
  }

  onDontLoveIts() {
    this.loveIts = this.loveIts -1;
    console.log("Don't love it!" + this.loveIts);
  }
}
