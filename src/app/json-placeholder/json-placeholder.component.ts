import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Post } from '../post';
import { JsonPlaceholderService } from '../json-placeholder.service';

@Component({
  selector: 'app-json-placeholder',
  templateUrl: './json-placeholder.component.html',
  styleUrls: ['./json-placeholder.component.css']
})
export class JsonPlaceholderComponent implements OnInit {

  posts: Post[];

  constructor(
    private jsonPlaceholderService: JsonPlaceholderService,
    private location: Location,
    ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  getPosts(): void {
    this.jsonPlaceholderService.getPosts()
      .subscribe(posts => this.posts = posts);
  }
}
