import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts = [
    {
      title: "Mon premier post",
      content: "Je suis le contenu du premier post",
      loveIts: 0,
      created_at: new Date()

    },

    {
      title: "Mon deuxième post",
      content: "Je suis le contenu du deuxième post",
      loveIts: 0,
      created_at: new Date()
    },

    {
      title: "Encore un post",
      content: "Je suis le contenu du troisième post",
      loveIts: 0,
      created_at: new Date()
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
