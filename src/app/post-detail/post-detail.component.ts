import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  @Input() post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getHero();   // initiate, get the gero by the passed id
  }

  getHero(): void {
    const id =+this.route.snapshot.paramMap.get('id');  // +converts string to number, get 'id'
    this.postService.getPost(id)    // call the getHero of the heroServive
      .subscribe(post => this.post = post);   // make the imput hero = returned hero
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.postService.updatePost(this.post)
      .subscribe(()=> this.goBack());
  }

}
